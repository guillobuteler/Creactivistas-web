import { Component } from 'react'
import calculateScore from 'b5-calculate-score'
import getResult from '@alheimsins/b5-result-text'
import axios from 'axios'
import { withRouter } from 'next/router'
import getConfig from 'next/config'
import { Code } from '../../components/alheimsins'
import Summary from '../../components/Summary'
import Domain from '../../components/Domain'
import validMongoId from '../../lib/valid-mongoid'
import formatId from '../../lib/format-id'
// import SocialShare from '../../components/SocialShare'

const { publicRuntimeConfig: { URL } } = getConfig()

const httpInstance = axios.create({
  baseURL: URL,
  timeout: 8000
})

const getResultFromId = async id => {
  const formattedId = formatId(id)
  if (!validMongoId(formattedId)) throw new Error('Invalid id')
  const { data } = await httpInstance.get(`/api/big5?id=${formattedId}`)
  try {
    const scores = calculateScore(data)
    return getResult({ scores, lang: data.lang || 'en' })
  } catch {
    console.error('El ID provisto no corresponde a ningun resultado en nuestra base de datos.')
  }
}

const Resume = ({ data, chartWidth }) => (
  <div>
    {data && <div className='domains'><Summary data={data} vAxis={{ minValue: 0, maxValue: 120 }} chartWidth={chartWidth} /></div>}
    {data && data.map((domain, index) => <Domain data={domain} key={index} chartWidth={chartWidth} />)}
    <style jsx>
      {`
        .domains {
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          margin-top: 10px;
          padding: 10px;
          text-align: left;
        }
      `}
    </style>
  </div>
)

class Resultados extends Component {
  static async getInitialProps (context) {
    const id = context && context.query && context.query.id
    if (id) {
      const results = await getResultFromId(id)
      return { results }
    }
    return {}
  }

  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      chartWidth: '985px'
    }
  }

  componentDidMount () {
    if (this.props.results) {
      this.setState({ results: this.props.results })
    }
  }

  render () {
    const { results, chartWidth } = this.state
    const { router } = this.props
    const id = router && router.query && router.query.id
    // const currentUrl = URL + '/big5/resultados/' + id
    return (
      <>
        <h2>Resultados</h2>
        {
          results &&
            <>
              {/* <SocialShare url={currentUrl} /> */}
              {id && <>Con el siguiente ID podes volver a ver los resultados en el futuro: <Code>{id}</Code></>}
              <Resume data={results} chartWidth={chartWidth} />
              {/* <SocialShare url={currentUrl} /> */}
            </>
        }
        {
          !results &&
            <>
              El ID introducido no se corresponde con ning&uacute;n resultado en nuestra base de datos.
              Si cree que este es un error, por favor contáctese con alguien de la organizaci&oacute;n.
            </>
        }
      </>
    )
  }
}

export default withRouter(Resultados)
