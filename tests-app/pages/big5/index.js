import { Router } from '../../routes'
import { Button } from '../../components/alheimsins'
import { FaExternalLinkAlt } from 'react-icons/fa'
// import ISO6391 from 'iso-639-1'
// import { getInfo } from '@alheimsins/b5-johnson-120-ipip-neo-pi-r'

const startTest = e => {
  e.preventDefault()
  const lang = 'es'
  Router.pushRoute(`/big5/test/${lang}`)
}

export default () => {
  return (
    <div>
      <div style={{ paddingBottom: '20px', borderBottom: '1px solid rgb(234, 234, 234)' }}>
        <h1>Test de personalidad basado en el modelo de los cinco grandes</h1>
      </div>
      <div style={{ textAlign: 'left', margin: 'auto', fontSize: '14px', width: '100%' }}>
        <p>Este es un test de personalidad gratuito de código abierto para medir los cinco grandes rasgos de la personalidad.</p>
        <p>
          Pruebas y evaluaciones se toman de <a href='http://ipip.ori.org' rel='noopener noreferrer' target='_blank'>ipip.ori.org</a>
          <FaExternalLinkAlt size='8' style={{ verticalAlign: 'top' }} />, Inventado por <i>Johnson's (2014) 120-item IPIP NEO-PI-R</i>.
        </p>
        <p>
          La siguiente prueba contiene una serie de preguntas que se estima que le llevarán mas o menos <b>diez minutos</b> para completarlo.
        </p>
        <p>Una vez que haya enviado la prueba, recibirá un informe detallado de la personalidad en los siguientes dominios:  <i>Apertura a la experiencia, conciencia, extraversión, afabilidad y neuroticismo.</i></p>
        <h2>Consejos</h2>
        <p>- Responde honestamente, incluso si no te gusta la respuesta.</p>
        <p>- Descríbete a ti mismo como generalmente eres ahora, no como deseas ser en el futuro.</p>
        <p>- Tu respuesta espontánea suele ser la más precisa.</p>
        <form onSubmit={startTest}>
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Button value='Empezar la prueba' type='submit' background='rgb(255, 0, 128)' border='1px solid rgb(255, 0, 128)' />
          </div>
        </form>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.6em;
          }
        `}
      </style>
    </div>
  )
}
