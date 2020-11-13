import { Component } from 'react'
import Form from '../../components/creactivistas/actus/form/Form'
import FormResults from '../../components/creactivistas/actus/form/FormResults'

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

  handleFormComplete = (clientName, clientEmail, answers) => {
    this.setState(() => ({ formComplete: true, data: { clientName, answers} }));
  }

  render () {
    const { formComplete, data } = this.state
    return !formComplete ? <Form onComplete={this.handleFormComplete} /> : <FormResults data={data} />
  }
}
