/***
 NODE SERVERLESS API FOR USE WITH VERCEL
 ***/

const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
const config = require('../config')

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const validMongoId = require('../lib/valid-mongoid')

const emailTemplateBig5 = require('../emailtemplate-big5')
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

module.exports = (req, res) => {
  try {
    const payload = req.body
    const { method, query: { id } } = req
    const uri = config.DB_CONNECTION.replace('<password>', config.DB_PASSWORD).replace('<dbname>', config.DB_NAME)
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    client.connect(err => {
      if (err) throw new Error(err)
      // Set db for use in APIs
      const db = client.db(config.DB_NAME)
      const big5DBCollection = db.collection(config.DB_COLLECTION_BIG5)
      switch (method) {
        case 'GET':
          if (!id || !validMongoId(id)) throw new Error('Not a valid id')
          big5DBCollection.findOne({ _id: ObjectID(id) }, (error, data) => {
            if (error) throw error
            res.send(data)
          })
          break
        case 'POST':
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
          break
      }
    })
  } catch (error) {
    return res.status(400).json({ error: 'Malformed JSON body in request.' })
  }
}
