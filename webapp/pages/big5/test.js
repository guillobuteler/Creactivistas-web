import { Component } from 'react'
import { Router } from '../../routes'
import LanguageBar from '../../components/LanguageBar'
import { Button, ProgressBar, RadioGroup, Radio, Timer } from '../../components/alheimsins'
import getConfig from 'next/config'
import axios from 'axios'
import { FaInfoCircle } from 'react-icons/fa'
import { populateData, restoreData, getProgress, clearItems, setItem } from '../../lib/localStorageStore'
const { publicRuntimeConfig: { URL } } = getConfig()
const httpInstance = axios.create({
  baseURL: URL,
  timeout: 8000
})
const { getItems: getInventory, getInfo } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')
const getItems = require('../../lib/get-items')
const sleep = require('../../lib/sleep')

export default class extends Component {
  static async getInitialProps ({ query, req }) {
    const lang = query.lang || 'es'
    const inventory = await getInventory(lang)
    return { inventory, lang }
  }

  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      position: 0,
      clientInfo: {
        name: '',
        email: ''
      },
      clientInfoValidation: {
        isComplete: false,
        emailErr: false
      },
      inventory: this.props.inventory,
      itemsPerPage: 5,
      results: [],
      answers: [],
      items: [],
      now: Date.now(),
      lang: this.props.lang
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.handleClearAnswers = this.handleClearAnswers.bind(this)
  }

  componentDidMount () {
    const itemsPerPage = window.innerWidth < 600 ? 1 : 5
    const { lang } = this.props
    if (getProgress()) {
      const data = restoreData()
      this.setState({ ...data, itemsPerPage, restore: true })
      console.log('Your state is restored from LocalStorage')

      if (lang !== 'en') {
        setItem('lang', lang)
        Router.pushRoute(`/big5/test/${lang}`)
      }
    } else {
      const { items } = getItems(this.state.position, itemsPerPage, this.state.inventory).current()
      this.setState({ items, itemsPerPage })

      if (lang !== 'en') {
        setItem('lang', lang)
        Router.pushRoute(`/big5/test/${lang}`)
      }
    }
  }

  handleClearAnswers () {
    clearItems()
    window.location.reload(true)
  }

  switchLanguage (lang) {
    const inventory = getInventory(lang)
    const { items } = getItems(this.state.position, this.state.itemsPerPage, inventory).current()
    this.setState({ inventory, lang, items })
    setItem('lang', lang)
    Router.pushRoute('b5_test', { lang })
  }

  async handleChange ({ target }) {
    const { clientInfo: { name, email } } = this.state
    const targetValue = target.value
    switch (target.name) {
      case 'name':
        this.setState({ clientInfo: { name: targetValue, email } })
        break
      case 'email':
        this.setState({ clientInfo: { name, email: targetValue } })
        break
      default:
        // original app code
        const { answers, items, inventory, itemsPerPage, previous, position } = this.state // eslint-disable-line
        const { domain, facet } = inventory.find(q => q.id === target.name) // eslint-disable-line
        answers[target.name] = { score: parseInt(target.value), domain, facet }
        const progress = Math.round(Object.keys(answers).length / inventory.length * 100) // eslint-disable-line
        const next = itemsPerPage === 1 && progress !== 100 ? false : items.filter(item => !answers[item.id]).length === 0 // eslint-disable-line
        this.setState({ answers, progress, next })
        populateData({ answers, progress, next, previous, position, items })
        if (itemsPerPage === 1 && progress !== 100) {
          await sleep(700)
          await this.handleSubmit()
        }
    }
  }

  handleBack () {
    window.scrollTo(0, 0)
    const { previous, items, position } = getItems(this.state.position, this.state.itemsPerPage, this.state.inventory).back()
    this.setState({ items, position, next: true, previous })
  }

  isValidEmail (email) {
    return /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i.test(email)
  }

  async handleSubmit () {
    window.scrollTo(0, 0)
    const { clientInfo: { name, email }, clientInfoValidation: { isComplete } } = this.state
    if (isComplete) {
      // original app code + name + email
      const { items, finished, position } = getItems(this.state.position, this.state.itemsPerPage, this.state.inventory).next()
      if (finished) {
        clearItems()
        const answers = this.state.answers
        const choices = Object.keys(answers).reduce((prev, current) => {
          const choice = answers[current]
          prev.push({
            domain: choice.domain,
            facet: choice.facet,
            score: choice.score
          })
          return prev
        }, [])
        const result = {
          ...getInfo(),
          lang: this.state.lang,
          clientName: name,
          clientEmail: email,
          answers: choices,
          timeElapsed: Math.round((Date.now() - this.state.now) / 1000),
          dateStamp: Date.now()
        }
        const { data } = await httpInstance.post('/api/big5', result)
        const id = data._id
        setItem('result', id)
        Router.pushRoute('b5_showResult', { id })
      } else {
        const next = items.filter(item => !this.state.answers[item.id]).length === 0
        this.setState({ items, position, next, previous: true, restore: false })
        populateData({ progress: this.state.progress, next, previous: true, answers: this.state.answers, position, items })
      }
    } else {
      // validate email address
      if (this.isValidEmail(email)) {
        this.setState({ clientInfoValidation: { isComplete: true, emailErr: false } })
      } else {
        this.setState({ clientInfoValidation: { isComplete, emailErr: true } })
      }
    }
  }

  render () {
    const { items, progress, answers, next, previous, lang, now, restore, clientInfo: { name, email }, clientInfoValidation: { isComplete, emailErr } } = this.state
    const done = progress === 100 && next
    const { handleChange, handleSubmit, handleBack, switchLanguage } = this
    return (
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'none', justifyContent: 'space-between' }}>
          <LanguageBar switchLanguage={switchLanguage} selectedLanguage={lang} />
          <div style={{ textAlign: 'right', fontSize: '12px' }}>
            <Timer start={now} />
          </div>
        </div>
        <ProgressBar progress={progress} />
        {
          restore && <p onClick={this.handleClearAnswers} style={{ color: '#FF0080', marginTop: '10px', cursor: 'pointer' }}><FaInfoCircle /> Your state is restored from LocalStorage. Click here to start over again.</p>
        }
        {isComplete || (
          <div>
            <div className='infocliente'>
              <input type='text' name='name' value={name} onChange={handleChange} placeholder='Nombre *' className='text' />
            </div>
            <div className='infocliente'>
              <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email *' className={emailErr ? 'text err' : 'text'} />
              <p style={emailErr ? { color: 'red', margin: '5px 0 0' } : { display: 'none' }}>* La direcci&oacute;n de email debe ser v&aacute;lida.</p>
            </div>
            <div className='navigation'>
              <Button type='submit' value='Empezar' onClick={handleSubmit} background='#0da0a0' border='1px solid #0b8080' disabled={name.length === 0 || email.length === 0} />
            </div>
          </div>
        )}
        {isComplete && items.map(item =>
          <div key={item.id} className={lang === 'ur' ? 'item inverted-text' : 'item'}>
            <div className='question'>
              {item.text}
            </div>
            <RadioGroup name={item.id} onChange={handleChange} checked={answers[item.id] && answers[item.id].score}>
              {item.choices.map(choice =>
                <Radio key={item.id + choice.score} value={choice.score} color='5' text={choice.text} style={{ display: 'block' }} />
              )}
            </RadioGroup>
          </div>
        )}
        {isComplete && (
          <div className='navigation'>
            <div style={{ marginRight: '10px' }}>
              <Button type='submit' value='Paso previo' onClick={handleBack} disabled={!previous} />
            </div>
            <div>
              <Button type='submit' value={done ? 'Ver resultados' : 'Siguiente'} onClick={handleSubmit} background={done ? '#FF0080' : 'black'} border={done ? '1px solid #FF0080' : '1px solid black'} disabled={!next} />
            </div>
          </div>
        )}
        <style jsx>
          {`
            .infocliente {
              margin-top: 27px;
            }
            .text {
              padding: 9px 5px;
              width: 450px;
              font-size: 0.9em;
            }
            .err {
              border: 2px solid red;
            }
            .item {
              margin-top: 30px;
            }
            .navigation {
              margin-top: 30px;
              display: inline-flex;
            }
            .question {
              font-size: 1.5em;
              margin-bottom: 5px;
            }
            .inverted-text {
              -moz-transform: scale(-1, 1);
              -webkit-transform: scale(-1, 1);
              -o-transform: scale(-1, 1);
              -ms-transform: scale(-1, 1);
              transform: scale(-1, 1);
            }
          `}
        </style>
      </div>
    )
  }
}
