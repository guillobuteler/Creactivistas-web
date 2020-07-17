export default () => (
  <footer id='EnneagonStudios'>
    <span>desarrollado por</span>
    <a href='http://www.enneagonstudios.com/' target='_blank' rel='noopener noreferrer'>
      <img src='/static/9S_footer.png' alt='Enneagon Studios Logo' />
    </a>
    <style jsx>
      {`
        footer#EnneagonStudios {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 81px;
          background: black;
          color: white;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        span {
          font-size: 16px;
          letter-spacing: 1px;
        }
        img {
          margin-left: 9px;
          margin-right: 24px;
          cursor: pointer;
        }
      `}
    </style>
  </footer>
)
