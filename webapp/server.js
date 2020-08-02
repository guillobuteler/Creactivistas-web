const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
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
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const emailDefaults = {
  to: '',
  from: 'Creactivistas <marubuteler@gmail.com>',
  bcc: 'marubuteler@gmail.com, abuteler@enneagonstudios.com',
  subject: 'Creactivistas | Resultados del test Big 5',
  text: 'Hola $__NAME__, este email fue enviado automáticamente. Para ver tus resultados en el test de perfil de personalidad basado en el modelo de los 5 grandes andá a $__DOMAIN__/tests/big5/resultados/ y completá el formulario con el siguiente ID: $__ID__',
  html: emailTemplateBig5
}
let email = {}

app.prepare().then(() => {
  const uri = config.DB_CONNECTION.replace('<password>', config.DB_PASSWORD).replace('<dbname>', config.DB_NAME)
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

    server.get('/api/login', (req, res) => {
      res.redirect('/')
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
        res.send(data) // return processed payload with insertion ID
        // resetear config a default
        email = JSON.parse(JSON.stringify(emailDefaults))
        // actualizar cuerpo del email con datos del test: direccion, nombre e ID
        email.to = data.clientEmail
        email.text = email.text.replace('$__NAME__', data.clientName)
        email.text = email.text.replace('$__DOMAIN__', config.URL)
        email.text = email.text.replace('$__ID__', data._id)
        email.html = email.html.replace('$__NAME__', data.clientName)
        email.html = email.html.replace(/\$__DOMAIN__/g, config.URL) // regexp global porque hay 2
        email.html = email.html.replace(/\$__ID__/g, data._id) // regexp global porque hay 2
        // enviar email
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
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
})
