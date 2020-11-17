import axios from 'axios'
import { Component } from 'react'
import getConfig from 'next/config'
import Form from '../../components/creactivistas/actus/form/Form'
import FormResults from '../../components/creactivistas/actus/form/FormResults'
import { procesarRespuestas } from '../../lib/actus/functions'

const { publicRuntimeConfig: { URL, PORT } } = getConfig()
const httpInstance = axios.create({
  baseURL: URL === 'http://localhost' ? `${URL}:${PORT}` : URL,
  timeout: 8000
})

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formComplete: false,
      data: {
        clientName: '',
        answers: []
      }
    }
  }
  async handleFormComplete (clientName, clientEmail, answers) {
    this.setState(() => ({ formComplete: true, data: { clientName, answers} }));
    const payload = {
      clientName,
      clientEmail,
      resultados: procesarRespuestas(answers)
    }
    const response = await httpInstance.post('/api/actus', payload)
    console.log(response)
  }
  render () {
    const { formComplete, data } = this.state
    return !formComplete ? <Form onComplete={this.handleFormComplete} /> : <FormResults data={data} />
  }
}
