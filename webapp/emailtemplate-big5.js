module.exports = `
<div style="background-color: #FFFFFF;
      font-family: Tahoma, Verdana, sans-serif;
      margin-top: 30px;
      margin-bottom: 50px;
      font-size: 16px;
      color: #666666;">
  <table style="background-color: #FFFFFF;
      font-family: Tahoma, Verdana, sans-serif;
      margin-top: 30px;
      margin-bottom: 50px;
      width: 800px;
      max-width: 800px;
      background: #ccc;
      border-spacing: 0;
      color: #666666;">
    <tr>
      <td style="background-color: white; text-align: center; border: 1px solid lightgray;"><img src="$__DOMAIN__/static/creactivistas_isologo_220x121px.png" alt="Creactivistas" width="220" height="121" /></td>
    </tr>
    <tr>
      <td>
        <table style="margin-top: 42px; margin-left: auto; margin-right: auto; width: 600px;">
          <tr>
            <th style="background-color: #f9f9f9;
              width: 474px;
              padding: 14px 27px;
              font-weight: 400;
              text-align: left;
              border-radius: 9px;
              font-size: 16px;"
            >
              <p style="color:#000">
                Hola $__NAME__,
              </p>
              <p style="color:#000">
                El ID de tus resultados en el test de perfil de personalidad basado en el modelo de los 5 grandes es: <strong>$__ID__</strong>
              </p>
              <p style="text-align: center;">
                <a href="$__DOMAIN__/big5/resultados/$__ID__">Ver resultados</a>
              </p>
              <p style="color:#555">
                Muchas gracias por confiar en nosotros, si te interesa recibir m&aacute;s informaci&oacute;n escrib&iacute; a <a href="mailto:marubuteler@gmail.com">marubuteler@gmail.com</a>.
              </p>
              <p style="font-style: italic;font-size: 14px;">Este email fue enviado autom&aacute;ticamente.</p>
            </th>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 72px;">&nbsp;</span></td></tr>
    <tr>
      <td style="background: #000; padding: 18px 6px 9px; text-align: end;">
        <span style="color: white; font-size: 15px; letter-spacing: 1px; vertical-align: top;">desarrollado por</span>
        <a style="display: inline-block;" href="https://www.enneagonstudios.com/" target="_blank" rel="noopener noreferrer">
          <img style="margin-left: 9px; margin-right: 24px; cursor: pointer;" src="http://www.actus.com.ar/assets/img/email_9S_footer.png" alt="Enneagon Studios Logo" />
        </a>
      </td>
    </tr>
  </table>
</div>
</html>`
