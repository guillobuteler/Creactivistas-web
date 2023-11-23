import axios from 'axios'
import { Component } from 'react'
import getConfig from 'next/config'
import Form from '../../components/creactivistas/actus/form/Form'
import FormResults from '../../components/creactivistas/actus/form/FormResults'
import { calcularMBTI, procesarRespuestas } from '../../lib/actus/functions'

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
        nombreCliente: '',
        answers: []
      }
    }
    this.handleFormComplete = this.handleFormComplete.bind(this)
  }
  async handleFormComplete (nombreCliente, emailCliente, answers) {
    const resultados = procesarRespuestas(answers)
    const { I, E, N, S, T, F, P, J } = resultados
    const totales = { I: I.total, E: E.total, N: N.total, S: S.total, T: T.total, F: F.total, P: P.total, J: J.total }
    const mbti = calcularMBTI(totales)
    const payload = {
      nombreCliente,
      emailCliente,
      resultados,
      mbti
    }
    const response = await httpInstance.post('/api/actus', payload)
    this.setState(() => ({ formComplete: true, data: { nombreCliente, answers} }))
  }
  render () {
    const { formComplete, data } = this.state
    return (!formComplete ? <Form onComplete={this.handleFormComplete} /> : <FormResults data={data} />)
  }
}
