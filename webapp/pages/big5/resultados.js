import { Component } from 'react'
import { Router } from '../../routes'
import validMongoId from '../../lib/valid-mongoid'
import formatId from '../../lib/format-id'
import { Code, Field, InputTextUncontrolled, Button } from '../../components/alheimsins'
import { getItem, clearItems } from '../../lib/localStorageStore'
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'next/router'

class Resultados extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    const localStorageId = getItem('result') || false
    this.setState({ localStorageId })
  }

  handleInputSubmit (e) {
    e.preventDefault()
    const id = formatId(this.state.submittedId)
    Router.pushRoute('b5_showResult', { id })
  }

  handleInputChange ({ target }) {
    const submittedId = target.value
    const error = submittedId && !validMongoId(formatId(submittedId)) ? 'Not a valid ID' : false
    this.setState({ submittedId, error })
  }

  render () {
    // redirect if valid ID in querystring
    const { id } = this.props.router.query
    if (id && validMongoId(id)) Router.pushRoute('b5_showResult', { id })

    // else
    const { handleInputSubmit, handleInputChange } = this
    const { error, submittedId, localStorageId } = this.state
    const disabledButton = !validMongoId(formatId(submittedId))
    return (
      <>
        <h2>Resultados</h2>
        <p>
          Si ya tomaste el test y recibiste por email tu ID, pod&eacute;s ver los resultados ingresando
          el ID en el formulario de abajo. <br />
          {/* Ejemplo: <Code>58a70606a835c400c8b38e84</Code>. */}
        </p>
        {
          localStorageId &&
            <p>
              Este es el ID de tu &uacute;ltimo test: <Code>{localStorageId}</Code>
              <a title='Delete' onClick={() => { clearItems(); window.location.reload(true) }}>
                <MdDelete style={{ cursor: 'pointer', marginRight: '10px' }} />
              </a>
            </p>
        }
        <div style={{ textAlign: 'left' }}>
          <form onSubmit={handleInputSubmit}>
            <Field name='ID' style={{ marginBottom: 0 }}>
              <InputTextUncontrolled name='submittedId' onChange={handleInputChange} placeholder='Ingresá aquí tu ID' autoFocus />
            </Field>
            {error && <p style={{ fontSize: '10px', color: '#ff0033' }}>{error}</p>}
            <Button value='Get results' type='submit' disabled={disabledButton} />
          </form>
        </div>
      </>
    )
  }
}

export default withRouter(Resultados)
