import { ShortcutH2 } from '../components/alheimsins'
import Logo from '../components/alheimsins/Logo'

const users = [
  {
    avatar: '/static/maccyber.png',
    name: 'Jonas Maccyber Enge',
    nick: {
      name: 'maccyber',
      link: 'https://github.com/maccyber'
    },
    description: 'generally a nice guy',
    dev: true
  },
  {
    avatar: '/static/zrrrzzt.png',
    name: 'Geir Gåsodden',
    nick: {
      name: 'zrrrzzt',
      link: 'https://github.com/zrrrzzt/'
    },
    description: 'generally a nice guy',
    dev: true
  },
  {
    avatar: '/static/elimg.png',
    name: 'Eli Marianne Huseby',
    nick: {
      name: 'elimh',
      link: 'http://blekksprutene.no/'
    },
    description: 'generally a nice woman'
  },
  {
    avatar: '/static/person.png',
    name: 'Eduardo Calle',
    nick: {
      name: 'nieled',
      link: 'https://riseup.net/'
    },
    description: 'generally a nice guy'
  }
]

const Users = ({ users }) => (
  <div className='about'>
    {users.map(user => (
      <div key={user.nick.name} className='info'>
        <div>
          <span className='avatar'>
            <img alt='Avatar' width='80' height='80' src={user.avatar} />
          </span>
        </div>
        <div className='text'>
          <div className='name'>
            {user.name}
          </div>
          <div className='nick'>
            <a href={user.nick.link}>@{user.nick.name}</a>
          </div>
          <div className='description'>
            <i>{user.description}</i>
          </div>
        </div>
      </div>
    ))}
    <style jsx>
      {`
        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .info {
          display: flex;
          flex-direction: row;
          padding: 10px 0px;
          align-items: center;
          justify-content: center;
        }
        .text {
          text-align: left;
          padding-left: 20px;
        }
        .avatar {
          border-radius: 100%;
          display: inline-block;
          overflow: hidden;
          border: 1px solid #eee;
          line-height: 0;
          vertical-align: top;
        }
        .nick a {
          color: #ff0080
        }
        .name {
          display: inline-block;
          font-size: 18px;
          font-weight: 700;
        }
      `}
    </style>
  </div>
)

export default () => {
  const dev = users.filter(user => user.dev)
  const trans = users.filter(user => !user.dev)
  return (
    <>
      <style jsx>
        {`
          p {
            margin-top: 0px;
          }
          div {
            border: 1px solid lightgray;
            padding: 12px;
            width: 750px;
            margin: auto;
            background: #fcfcfc;
          }
          a {
            display: inline-block;
            position: relative;
            text-decoration: none;
            margin: 0;
            transition: all 200ms;
            font-size: 12px;
          }
          a:after {
            content: '';
            height: 1px;
            background: white;
            position: absolute;
            pointer-events: none;
            bottom: -5px;
            left: 0;
            right: 0;
            opacity: 0;
            transform: scale(0, 1);
            transition: all 200ms;
          }
          a:hover:after {
            opacity: 1;
            transform: scale(1, 1);
          }
          a:hover {
            color: blue;
            text-decoration: underline;
          }
          section {
            margin-top: 54px;
            line-height: 1.5em;
          }
        `}
      </style>
      <div>
        <p>Este test está basado en el proyecto de c&oacute;digo abierto desarrollado por:</p>
        <a href='https://alheimsins.net' target='_blank' style={{ color: 'black', marginRight: 18 }} rel='noopener noreferrer'>
          {Logo({ color: 'black' })}ALHEIMSINS
        </a>
        [ <a href='https://github.com/alheimsins' target='_blank' rel='noopener noreferrer'>GITHUB</a> ]
      </div>
      <ShortcutH2 name='developers' />
      <Users users={dev} />
      <ShortcutH2 name='translators' />
      <Users users={trans} />
      <section>
        Su implementaci&oacute;n e integración al sitio de Actus - Zoom estuvo a cargo del estudio de diseño y desarrollo web
        <a href='http://www.enneagonstudios.com' style={{ color: '#6979a7', fontSize: '1.2em', fontWeight: 600 }} title='Visitar sitio web' target='_blank' rel='noopener noreferrer'>
          EnneagonStudios.com
        </a><br />
        Para consultas envi&aacute; un email a <a href='mailto:contacto@enneagonstudios.com' style={{ fontSize: '1em', color: '#0da0a0 !important' }} rel='noopener noreferrer' target='_blank'>contacto@enneagonstudios.com</a>.
      </section>
    </>
  )
}
