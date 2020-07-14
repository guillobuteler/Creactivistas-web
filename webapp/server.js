const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
const next = require('next')
const routes = require('./routes')
const mongo = require('mongojs')
const helmet = require('helmet')
const requestCountry = require('request-country')
const config = require('./config')
const validMongoId = require('./lib/valid-mongoid')
const { join } = require('path')
const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')

const app = next({ dev })
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 3000
const express = require('express')
const nodemailer = require('nodemailer')
const emailTemplateBig5 = require('./emailtemplate-big5')

const emailConfigDefaults = {
  from: 'Actus <marubuteler@gmail.com>',
  to: '',
  bcc: 'marubuteler@gmail.com, abuteler@enneagonstudios.com',
  subject: 'Actus | Resultados del test Big 5',
  text: 'Hola $__NAME__, este email fue enviado automáticamente. Para ver tus resultados en el test de perfil de personalidad basado en el modelo de los 5 grandes andá a http://actus.com.ar/zoom/big5/resultados/ y completá el formulario con el siguiente ID: $__ID__',
  html: emailTemplateBig5
}
let emailConfig = {}
const sendMail = async (mail) => {
  // create a nodemailer transporter using host's sendmail
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  // send mail using transporter
  const info = await transporter.sendMail(mail)

  console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`)
}

i18n
  .use(Backend)
  // .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      lng: 'es',
      lookupQuerystring: 'lng',
      fallbackLng: 'es',
      preload: ['es', 'en', 'no'], // Preload all languages
      ns: ['common', 'home'], // Need to preload all the namespaces
      backend: {
        loadPath: join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
        addPath: join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
      }
    },
    () => {
      // Loaded translations we can bootstrap our routes
      app.prepare().then(() => {
        const server = express()
        const db = mongo(config.DB_CONNECTION)
        const collection = db.collection(config.DB_COLLECTION)

        server.use(helmet())
        server.use(express.json())
        server.use(i18nextMiddleware.handle(i18n)) // Enable middleware for i18next
        server.use('/locales', express.static(join(__dirname, '/locales'))) // Serve locales for client
        server.use(requestCountry.middleware({
          privateIpCountry: 'es'
        }))

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

        server.get('/api/get/:id', (req, res) => {
          const id = req.params && req.params.id ? req.params.id : false
          if (!id || !validMongoId(id)) throw new Error('Not a valid id')
          collection.findOne({ _id: mongo.ObjectId(id) }, (error, data) => {
            if (error) throw error
            res.send(data)
          })
        })

        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        server.post('/api/save', (req, res) => {
          const payload = req.body
          collection.insert(payload, (error, data) => {
            if (error) throw error
            res.send(data)
            console.log(data)
            // resetear config a default
            emailConfig = JSON.parse(JSON.stringify(emailConfigDefaults))
            // actualizar cuerpo del email con datos del test: direccion, nombre e ID
            emailConfig.to = data.clientEmail
            emailConfig.text = emailConfig.text.replace('$__NAME__', data.clientName)
            emailConfig.text = emailConfig.text.replace('$__ID__', data._id)
            emailConfig.html = emailConfig.html.replace('$__NAME__', data.clientName)
            emailConfig.html = emailConfig.html.replace('$__ID__', data._id)
            // enviar email
            sendMail(emailConfig)
          })
        })

        server.use(handler)

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
    }
  )
