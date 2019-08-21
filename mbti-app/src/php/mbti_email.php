<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Actus</title>
</head>
<body style="background-color: #FFFFFF;
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
        <table style="margin-left: auto; margin-right: auto; width: 600px;">
          <tr>
            <th style="background-color: #e4e4e0;
              width: 474px;
              padding: 14px 16px;
              font-weight: 400;
              text-align: left;
              border-radius: 18px;
              font-size: 16px;"
            >
              <!-- < ?php if ($email_is_valid): ?> -->
              <p style="font-style: italic;">Este email fue enviado automáticamente.</p>
              <!-- < ?php else: ?> -->
              <!-- <p>(El usuario no proveyó una dirección de email valida.)</p> -->
              <!-- < ?php endif; ?> -->
              <p style="color:#000">
                Hola <?php echo $name; ?>,<br />
                Estos fueron tus resultados en el test de perfil de personalidad estilo MBTI:
              </p>
            </th>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
    <tr>
      <td>
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
          <?php $totalE = $answers[0] + $answers[9] + $answers[17] + $answers[23] + $answers[26]; ?>
          <?php $totalI = $answers[1] + $answers[8] + $answers[16] + $answers[22] + $answers[27]; ?>
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
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['1b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['5a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['9a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['12a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['14b']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">I</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalI; ?></th>
                  </tr>
                </tbody>
              </table>
              <table style="border-spacing: 0;">
                <tbody>
                  <tr>
                    <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                      Resultados de Extroversion
                    </th>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['1a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['5b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['9b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['12b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['14a']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">E</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalE; ?></th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
    <tr>
      <td>
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
          <?php $totalS = $answers[3] + $answers[10] + $answers[19] + $answers[29] + $answers[34]; ?>
          <?php $totalN = $answers[2] + $answers[11] + $answers[18] + $answers[28] + $answers[35]; ?>
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
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['2a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['6b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['10a'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['15a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['18b']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">N</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalN; ?></th>
                  </tr>
                </tbody>
              </table>
              <table style="border-spacing: 0;">
                <tbody>
                  <tr>
                    <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                      Resultados de Sensing
                    </th>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['2b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['6a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['10b'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['15b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['18a']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">S</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalS; ?></th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
    <tr>
      <td>
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
          <?php $totalT = $answers[4] + $answers[12] + $answers[21] + $answers[31] + $answers[39]; ?>
          <?php $totalF = $answers[5] + $answers[13] + $answers[20] + $answers[30] + $answers[38]; ?>
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
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['3a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['7a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['11b'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['16b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['20b']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">T</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalT; ?></th>
                  </tr>
                </tbody>
              </table>
              <table style="border-spacing: 0;">
                <tbody>
                  <tr>
                    <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                      Resultados de Feeling
                    </th>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['3b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['7b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['11a'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['16a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['20a']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">F</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalF; ?></th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
    <tr>
      <td>
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
          <?php $totalP = $answers[6] + $answers[14] + $answers[25] + $answers[33] + $answers[36]; ?>
          <?php $totalJ = $answers[7] + $answers[15] + $answers[24] + $answers[32] + $answers[37]; ?>
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
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['4a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['8a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['13b'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['17b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['19a']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">P</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalP; ?></th>
                  </tr>
                </tbody>
              </table>
              <table style="border-spacing: 0;">
                <tbody>
                  <tr>
                    <th style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 16px; min-width: 169px;">
                      Resultados de Judging
                    </th>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['4b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['8b']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['13a'];?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['17a']; ?></td>
                    <td style="font-weight: 400; color: #000; font-size: 14px; padding: 14px 23px;"><?php echo $answers['19b']; ?></td>
                  </tr>
                  <tr>
                    <th style="color: #000; font-size: 14px; background: #eee;"><span style="font-size: 18px; margin-right: 9px;">J</span> Total</th>
                    <th colspan="5" style="font-size: 14px; font-weight: 700; color: #000; background: #eee;"><?php echo $totalJ; ?></th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
    <tr>
      <td>
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
          <?php $mbti = (($totalI>$totalE)?'I':'E') . (($totalN>$totalS)?'N':'S') . (($totalT>$totalF)?'T':'F') . (($totalP>$totalJ)?'P':'J'); ?>
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
              <?php echo $mbti ; ?>
          </th></tr>

          <tr><th colspan="7" style="background-color: #DDD; color: #00A; padding: 14px 16px;">
            <a href="<?php echo 'http://actus.com.ar/mbti/charts/' .
              $totalI . ',' . $totalE . ',' . $totalN . ',' . $totalS . ',' .
              $totalT . ',' . $totalF . ',' . $totalP . ',' . $totalJ;
            ?>">
              Ver gr&aacute;fico
            </a>
          </th></tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 36px;">&nbsp;</span></td></tr>
    <tr>
      <td>
        <table style="margin-left: auto; margin-right: auto; width: 740px;">
          <tr>
            <th style="background-color: #e4e4e0;
              width: 474px;
              padding: 14px 16px;
              font-weight: 400;
              text-align: left;
              border-radius: 18px;
              font-size: 16px;"
            >
            <p style="color: #000;">
              Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca
              de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a
              <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
            </p>
            </th>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td><span style="display: block; height: 72px;">&nbsp;</span></td></tr>
    <tr>
      <td style="background:#000; text-align: right; padding: 18px 6px 9px;">
        <span style="color: white; font-size: 16px; letter-spacing: 1px; vertical-align: top;">desarrollado por</span>
        <a style="display: inline-block;" href="http://www.enneagonstudios.com/" target="_blank" rel="noopener noreferrer">
          <img style="margin-left: 9px; margin-right: 24px; cursor: pointer;"
            src="http://www.actus.com.ar/assets/img/email_9S_footer.png" alt="Enneagon Studios Logo"/>
        </a>
      </td>
    </tr>
  </table>
</body>
</html>