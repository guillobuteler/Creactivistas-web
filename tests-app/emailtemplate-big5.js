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
      max-width: 800px;
      background: #ccc;
      border-spacing: 0;
      color: #666666;">
    <tr>
      <td><img src="http://www.actus.com.ar/assets/img/email_zoom_header.jpg" width="800" /></td>
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
              border-radius: 18px;
              font-size: 16px;"
            >
              <p style="color:#000">
                Hola $__NAME__,<br />
              </p>
              <p style="color:#000">
                El ID de tus resultados en el test de perfil de personalidad basado en el modelo de los 5 grandes es: <strong>$__ID__</strong>
              </p>
              <p style="text-align: center;">
                <a href="http://actus.com.ar/tests/big5/result/$__ID__">Ver resultados</a>
              </p>
              <p style="color:#555">
                Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:marubuteler@gmail.com">marubuteler@gmail.com</a> para coordinar una entrevista.
              </p>
              <p style="font-style: italic;font-size: 14px;">Este email fue enviado automáticamente.</p>
            </th>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 72px;">&nbsp;</span></td></tr>
    <tr>
      <td style="background: #000; display: flex; justify-content: flex-end; align-self: center; padding: 18px 6px 9px;">
        <span style="color: white; font-size: 15px; letter-spacing: 1px;">desarrollado por</span>
        <a style="display: inline-block;" href="http://www.enneagonstudios.com/" target="_blank" rel="noopener noreferrer">
          <img style="margin-left: 9px; margin-right: 24px; cursor: pointer;" src="http://www.actus.com.ar/assets/img/email_9S_footer.png" alt="Enneagon Studios Logo" />
        </a>
      </td>
    </tr>
  </table>
</div>
</html>`
