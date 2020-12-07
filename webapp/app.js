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
const emailTemplateActus = require('./emailtemplate-actus')
const emailTemplateBig5 = require('./emailtemplate-big5')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const { hidratarTemplateActus } = require('./lib/actus/server')

const emailDefaults = {
  to: '',
  from: 'Creactivistas <marubuteler@gmail.com>',
  subject: 'Creactivistas | Resultados del test $__TESTNAME__',
  text: 'Hola $__NAME__, este email fue enviado automáticamente luego que completaste el test $__TESTNAME__. Si recibiste este correo es probable que tu casilla de correos no soporte HTML. Por favor ponete en contacto si queres recibir tus resultados sin volver a completar el test.'
}
const hidratarEmailBase = (email, destinatario, nombreCliente, domain, testname) => {
  // reemplaza los placeholders del contenido default de los emails con la data posta
  // destinatario
  email.to = destinatario
  // subject
  email.subject = email.subject.replace('$__TESTNAME__', testname)
  email.subject = email.subject.replace('$__NAME__', nombreCliente)
  // texto en caso de que no soporte HTML
  email.text = email.text.replace('$__NAME__', nombreCliente)
  email.text = email.text.replace('$__TESTNAME__', testname)
  // html template
  email.html = email.html.replace('$__NAME__', nombreCliente)
  email.html = email.html.replace(/\$__DOMAIN__/g, domain) // regexp global porque hay 2
  return email
}
const hidratarEmailBig5 = (email, id) => {
  // html template
  email.html = email.html.replace(/\$__ID__/g, id) // regexp global porque hay 2
  return email
}
let email = {}

console.log(`> Initializing on ${config.URL}:${port}...`)
app.prepare().then(() => {
  const { DB_CONNECTION, DB_USER, DB_PASSWORD, DB_NAME } = config;
  const uri = DB_CONNECTION.replace('<user>', DB_USER).replace('<password>', DB_PASSWORD).replace('<dbname>', DB_NAME)
  console.log('MongoDB uri: ', uri)
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  client.connect(err => {
    if (err) throw new Error(err)
    // Set db for use in APIs
    const db = client.db(config.DB_NAME)
    const actusDBCollection = db.collection(config.DB_COLLECTION_ACTUS)
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

    server.post('/api/actus', (req, res) => {
      const payload = req.body
      actusDBCollection.insertOne(payload, (error, commandResult) => {
        if (error) throw error
        const data = commandResult.ops[0]
        res.send(data) // return processed payload with DB insertion ID

        // Mandar mails a cliente y admins
        const { nombreCliente, emailCliente, resultados, mbti, _id } = data
        // - resetear objeto email con un clon del objeto default
        email = JSON.parse(JSON.stringify(emailDefaults))
        email.html = emailTemplateActus
        email = hidratarEmailBase(email, emailCliente, nombreCliente, config.URL, 'Actus')
        email.html = hidratarTemplateActus(email.html, resultados, mbti)
        // - enviar email a cliente
        sgMail.send(email).catch(err => {
          console.error(err)
          console.log(email)
          if (err.response) console.error(err.response.body)
        })
        // - admin overrides
        email.to = 'marubuteler@gmail.com'
        email.subject = `Creactivistas Admin | Actus: Resultados de ${nombreCliente} (${emailCliente})`,
        email.text = `Hola Maru, este email fue enviado automáticamente luego de que ${nombreCliente} completó el test Actus. Si recibiste este correo es probable que su casilla de correos no soportara HTML. Ponete en contacto con el admin si necesitás recuperar los resultados desde la DB.`
        email.bcc = ['abuteler@enneagonstudios.com']
        // - enviar email admin
        sgMail.send(email).catch(err => {
          console.error(err)
          console.log(email)
          if (err.response) console.error(err.response.body)
        })
      })
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
        // - resetear objeto email con un clon del objeto default
        email = JSON.parse(JSON.stringify(emailDefaults))
        email.html = emailTemplateBig5
        email = hidratarEmailBase(email, clientEmail, clientName, config.URL, 'Big 5')
        email = hidratarEmailBig5(email, _id)
        // - enviar email a cliente
        sgMail.send(email).catch(err => {
          console.error(err)
          console.log(email)
          if (err.response) console.error(err.response.body)
        })
        // - admin overrides
        email.to = 'marubuteler@gmail.com'
        email.subject = `Creactivistas Admin | Big 5: Resultados de ${clientName} (${clientEmail})`,
        email.text = `Hola Maru, este email fue enviado automáticamente luego de que ${clientName} completó el test Big 5. Si recibiste este correo es probable que su casilla de correos no soportara HTML. Ponete en contacto con el admin si necesitás recuperar los resultados desde la DB.`
        email.bcc = ['abuteler@enneagonstudios.com']
        // - enviar email admins
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
