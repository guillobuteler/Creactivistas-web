import { Component } from 'react'
import Form from '../../../components/creactivistas/actus/form/Form'
import FormResults from '../../../components/creactivistas/actus/form/FormResults'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formComplete: false,
      clientInfo: {
        name: '',
        email: ''
      },
      clientInfoValidation: {
        isComplete: false,
        emailErr: false
      },
      results
    }
  }

  handleFormComplete = () => {
    
  }

  render () {
    const { formComplete } = this.state
    return !formComplete ? <Form onComplete={handleFormComplete} /> : <FormResults data={formData} />
  }
}
