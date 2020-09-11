const dev = process.env.NODE_ENV !== 'production'
// if (dev) {
require('dotenv').config()
// }
const next = require('next')
const routes = require('./routes')

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const helmet = require('helmet')
const config = require('./config')
const { join } = require('path')
const validMongoId = require('./lib/valid-mongoid')

const app = next({ dev })
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000
const express = require('express')
const emailTemplateBig5 = require('./emailtemplate-big5')
const emailTemplateBig5Admin = require('./emailtemplate-big5-admin')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const emailDefaults = {
  to: '',
  from: 'Creactivistas <marubuteler@gmail.com>',
  subject: 'Creactivistas | Resultados del test $__TESTNAME__',
  text: 'Hola $__NAME__, este email fue enviado automáticamente. Para ver tus resultados en el test $__TESTNAME__ andá a $__DOMAIN__/tests/big5/resultados/ y completá el formulario con el siguiente ID: $__ID__'
}
const emailDefaultsAdmin = {
  to: 'marubuteler@gmail.com',
  from: 'Creactivistas <marubuteler@gmail.com>',
  subject: 'Creactivistas Admin | $__TESTNAME__: Resultados de $__NAME__',
  text: 'Hola Maru, este email fue enviado automáticamente. Para ver los resultados de $__NAME__ en el test $__TESTNAME__ andá a $__DOMAIN__/tests/big5/resultados/ y completá el formulario con el siguiente ID: $__ID__'
}
const hidratarEmail = (email, to, name, domain, id, testname) => {
  // reemplaza los placeholders del contenido default de los emails con la data posta
  // destinatario
  email.to = to
  // subject
  email.subject = email.subject.replace('$__TESTNAME__', testname)
  email.subject = email.subject.replace('$__NAME__', name)
  // texto en caso de que no soporte HTML
  email.text = email.text.replace('$__NAME__', name)
  email.text = email.text.replace('$__TESTNAME__', testname)
  email.text = email.text.replace('$__DOMAIN__', domain)
  email.text = email.text.replace('$__ID__', id)
  // html template
  email.html = email.html.replace('$__NAME__', name)
  email.html = email.html.replace(/\$__DOMAIN__/g, domain) // regexp global porque hay 2
  email.html = email.html.replace(/\$__ID__/g, id) // regexp global porque hay 2
  return email
}
let email = {}

app.prepare().then(() => {
  const uri = config.DB_CONNECTION.replace('<password>', config.DB_PASSWORD).replace('<dbname>', config.DB_NAME)
  console.log(uri)
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  client.connect(err => {
    if (err) throw new Error(err)
    // Set db for use in APIs
    const db = client.db(config.DB_NAME)
    const big5DBCollection = db.collection(config.DB_COLLECTION_BIG5)

    // Configure app server and APIs
    const server = express()
    server.use(helmet())
    server.use(express.json())

    server.get('/sitemap.xml', (req, res) => {
      const filePath = join(__dirname, 'static', 'sitemap.xml')
      return app.serveStatic(req, res, filePath)
    })

    server.get('/service-worker.js', (req, res) => {
      const filePath = join(__dirname, '.next', 'service-worker.js')
      return app.serveStatic(req, res, filePath)
    })

    server.get('/api/ping', (req, res) => {
      res.send('pong')
    })

    server.get('/api/big5?:id', (req, res) => {
      const id = req.query && req.query.id ? req.query.id : false
      if (!id || !validMongoId(id)) throw new Error('Not a valid id')
      big5DBCollection.findOne({ _id: ObjectID(id) }, (error, data) => {
        if (error) throw error
        res.send(data)
      })
    })

    server.post('/api/big5', (req, res) => {
      const payload = req.body
      big5DBCollection.insertOne(payload, (error, commandResult) => {
        if (error) throw error
        const data = commandResult.ops[0]
        res.send(data) // return processed payload with DB insertion ID

        // Mandar mails a cliente y admins
        const { clientEmail, clientName, _id } = data

        // clone defaults clientes
        email = JSON.parse(JSON.stringify(emailDefaults))
        email.html = emailTemplateBig5
        email = hidratarEmail(email, clientEmail, clientName, config.URL, _id, 'Big 5')
        // enviar email cliente
        sgMail.send(email).catch(err => {
          console.error(err)
          console.log(email)
          if (err.response) console.error(err.response.body)
        })

        // clone defaults admin
        email = JSON.parse(JSON.stringify(emailDefaultsAdmin))
        email.html = emailTemplateBig5Admin
        email = hidratarEmail(email, 'marubuteler@gmail.com', clientName, config.URL, _id, 'Big 5')
        email.bcc = ['abuteler@enneagonstudios.com']
        // enviar email admins
        sgMail.send(email).catch(err => {
          console.error(err)
          console.log(email)
          if (err.response) console.error(err.response.body)
        })
      })
    })

    server.use(handler)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on ${config.URL}:${port}`)
    })
  })
})
