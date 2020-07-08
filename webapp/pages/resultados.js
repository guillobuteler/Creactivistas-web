import { Component } from 'react'
import { Router } from '../routes'
import validMongoId from '../lib/valid-mongoid'
import formatId from '../lib/format-id'
import { Code, Field, InputTextUncontrolled, Button } from '../components/alheimsins'
import { getItem, clearItems } from '../lib/localStorageStore'
import { MdDelete } from 'react-icons/md'
// import getConfig from 'next/config'
// const { publicRuntimeConfig: { URL } } = getConfig()

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    const resultId = getItem('result') || false
    this.setState({ resultId })
  }

  handleInputSubmit (e) {
    e.preventDefault()
    const id = formatId(this.state.id)
    Router.pushRoute('showResult', { id })
  }

  handleInputChange ({ target }) {
    const id = target.value
    const error = id && !validMongoId(formatId(id)) ? 'Not a valid ID' : false
    this.setState({ id, error })
  }

  render () {
    const { handleInputSubmit, handleInputChange } = this
    const { error, id, resultId } = this.state
    const disabledButton = !validMongoId(formatId(id))
    return (
      <>
        <h2>Resultados</h2>
        <p>
          Si ya tomaste el test y recibiste por email tu ID, pod&eacute;s ver los resultados ingresando
          el ID en el formulario de abajo. <br />
          Ejemplo: <Code>58a70606a835c400c8b38e84</Code>.
        </p>
        {
          resultId &&
            <p>
              Este es el ID de tu &uacute;ltimo test: <Code>{resultId}</Code>
              <a title='Delete' onClick={() => { clearItems(); window.location.reload(true) }}>
                <MdDelete style={{ cursor: 'pointer', marginRight: '10px' }} />
              </a>
            </p>
        }
        <div style={{ textAlign: 'left' }}>
          <form onSubmit={handleInputSubmit}>
            <Field name='ID' style={{ marginBottom: 0 }}>
              <InputTextUncontrolled name='id' onChange={handleInputChange} placeholder='Ingresá aquí tu ID' autoFocus />
            </Field>
            {error && <p style={{ fontSize: '10px', color: '#ff0033' }}>{error}</p>}
            <Button value='Get results' type='submit' disabled={disabledButton} />
          </form>
        </div>
      </>
    )
  }
}
