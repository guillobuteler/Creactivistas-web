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
                Estos fueron tus resultados en el test de perfil de personalidad Actus (basado en MBTI):
              </p>

              <div>
                <table style="margin-left: auto;
                  margin-right: auto;
                  background: white;
                  border-spacing: 1px;"
                >
                  <tr><th colspan="7" style="background-color: #444;
                    width: 474px;
                    padding: 14px 16px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #FFF;">¿Dónde preferís enfocar tu atención?</th></tr>
                  <tr>
                    <th colspan="7" style="background-color: #777;
                      width: 474px;
                      padding: 14px 16px;
                      font-weight: 400;
                      font-size: 16px;
                      color: #FFF;"
                    >
                      La escala IE
                    </th>
                  </tr>
                  <tr>
                    <td style="width: 474px;
                      padding: 14px 16px;">
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Introversion
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_I_1b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_I_5a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_I_9a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_I_12a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_I_14b__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">I</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_I__</th>
                          </tr>
                        </tbody>
                      </table>
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Extroversion
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_E_1a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_E_5b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_E_9b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_E_12b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_E_14a__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">E</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_E__</th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <table style="margin-left: auto;
                    margin-right: auto;
                    background: white;
                    border-spacing: 1px;"
                >
                  <tr><th colspan="7" style="background-color: #444;
                    width: 474px;
                    padding: 14px 16px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #FFF;">¿Cómo procesas información y te enteras de cosas?</th></tr>
                  <tr>
                    <th colspan="7" style="background-color: #777;
                        width: 474px;
                        padding: 14px 16px;
                        font-weight: 400;
                        font-size: 16px;
                        color: #FFF;"
                    >
                      La escala NS
                    </th>
                  </tr>
                  <tr>
                    <td style="width: 474px;
                      padding: 14px 16px;">
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de iNtuition
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_N_2a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_N_6b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_N_10a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_N_15a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_N_18b__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">N</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_N__</th>
                          </tr>
                        </tbody>
                      </table>
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Sensing
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_S_2b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_S_6a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_S_10b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_S_15b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_S_18a__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">S</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_S__</th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <table style="margin-left: auto;
                    margin-right: auto;
                    background: white;
                    border-spacing: 1px;"
                >
                  <tr><th colspan="7" style="background-color: #444;
                    width: 474px;
                    padding: 14px 16px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #FFF;">¿Cómo tomas decisiones?</th></tr>
                  <tr>
                    <th colspan="7" style="background-color: #777;
                      width: 474px;
                      padding: 14px 16px;
                      font-weight: 400;
                      font-size: 16px;
                      color: #FFF;"
                    >
                      La escala TF
                    </th>
                  </tr>
                  <tr>
                    <td style="width: 474px;
                      padding: 14px 16px;">
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Thinking
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_T_3a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_T_7a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_T_11b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_T_16b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_T_20b__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">T</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_T__</th>
                          </tr>
                        </tbody>
                      </table>
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Feeling
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_F_3b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_F_7b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_F_11a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_F_16a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_F_20a__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">F</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_F__</th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <table style="margin-left: auto;
                    margin-right: auto;
                    background: white;
                    border-spacing: 1px;"
                >
                  <tr><th colspan="7" style="background-color: #444;
                    width: 474px;
                    padding: 14px 16px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #FFF;">¿Cómo te orientas en relación al mundo exterior?</th></tr>
                  <tr>
                    <th colspan="7" style="background-color: #777;
                      width: 474px;
                      padding: 14px 16px;
                      font-weight: 400;
                      font-size: 16px;
                      color: #FFF;"
                    >
                      La escala PJ
                    </th>
                  </tr>
                  <tr>
                    <td style="width: 474px;
                      padding: 14px 16px;">
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Perceiving
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_P_4a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_P_8a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_P_13b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_P_17b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_P_19a__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">P</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_P__</th>
                          </tr>
                        </tbody>
                      </table>
                      <table style="border-spacing: 0;">
                        <tbody>
                          <tr>
                            <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                              Resultados de Judging
                            </th>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_J_4b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_J_8b__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_J_13a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_J_17a__</td>
                            <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;">$__PARCIAL_J_19b__</td>
                          </tr>
                          <tr>
                            <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">J</span> Total</th>
                            <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;">$__TOTAL_J__</th>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <table style="margin-left: auto;
                    margin-right: auto;
                    background: white;
                    border-spacing: 1px;"
                >
                  <tr><th colspan="7" style="background-color: #777;
                    font-size: 16px;
                    font-weight: normal;
                    width: 474px;
                    padding: 14px 16px;
                    color: #FFF;">Tu Tipo de Preferencias MBTI</th></tr>
                  <tr><th colspan="7"
                    style="background-color: #444;
                      padding: 12px;
                      color: #FFF;
                      width: 474px;
                      padding: 14px 16px;
                      font-size: 60px;
                      font-weight: 400;
                      font-family: constantiaregular,serif;
                      letter-spacing: 20px;"
                    >
                      $__MBTI__
                  </th></tr>
                </table>
              </div>

              <p style="text-align: center;">
                <a href="$__DOMAIN__/$__LINK__">Ver gr&aacute;ficos</a>
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
        <a style="display: inline-block;" href="http://www.enneagonstudios.com/" target="_blank" rel="noopener noreferrer">
          <img style="margin-left: 9px; margin-right: 24px; cursor: pointer;" src="http://www.actus.com.ar/assets/img/email_9S_footer.png" alt="Enneagon Studios Logo" />
        </a>
      </td>
    </tr>
  </table>
</div>
</html>`
