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
			color: #666666;">
	<table style="background-color: #FFFFFF;
			font-family: Tahoma, Verdana, sans-serif;
			margin-top: 30px;
			margin-bottom: 50px;
			color: #666666;">
		<tr>
			<td><img src="http://www.actus.com.ar/mbti/static/media/header_zoom_email.jpg" width="800" /></td>
		</tr>
		<tr>
			<td>
				<?php if ($email_is_valid): ?>
					<p>Este email fue enviado automáticamente a la dirección <?php echo $email; ?>.</p>
				<?php else: ?>
					<p>(El usuario no proveyó una dirección de email valida.)</p>
				<?php endif; ?>
				<p>Hola <?php echo $name; ?>,</p>
				<p>Estos fueron tus resultados del test de perfil de personalidad estilo MBTI:</p>
				<table border=1>

					<tr><th colspan="7" style="background-color: #444; color: #FFF;">¿Dónde preferís enfocar tu atención?</th></tr>
					<?php $totalE = $answers[0] + $answers[9] + $answers[17] + $answers[23] + $answers[26]; ?>
					<?php $totalI = $answers[1] + $answers[8] + $answers[16] + $answers[22] + $answers[27]; ?>
					<?php if($totalI > $totalE): ?>
					<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala IE: I de Introversion</th></tr>
					<?php else: ?>
					<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala IE: E de Extroversion</th></tr>
					<?php endif; ?>
					<tr align=middle>
						<th>Resultados de Introversion</th>
						<td><?php echo $answers['1b']; ?></td>
						<td><?php echo $answers['5a']; ?></td>
						<td><?php echo $answers['9a']; ?></td>
						<td><?php echo $answers['12a']; ?></td>
						<td><?php echo $answers['14b']; ?></td>
					</tr>
					<tr align=middle>
						<th>I Total</th>
						<th colspan="6"><?php echo $totalI; ?></th>
					</tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr align=middle>
						<th>Resultados de Extroversion</th>
						<td><?php echo $answers['1a']; ?></td>
						<td><?php echo $answers['5b']; ?></td>
						<td><?php echo $answers['9b']; ?></td>
						<td><?php echo $answers['12b']; ?></td>
						<td><?php echo $answers['14a']; ?></td>
					</tr>
					<tr align=middle>
						<th>E Total</th>
						<th colspan="6"><?php echo $totalE; ?></th>
					</tr>

					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					
					
					
					<tr><th colspan="7" style="background-color: #444; color: #FFF;">¿Cómo procesas información y te enteras de cosas?</th></tr>
					<?php $totalS = $answers[3] + $answers[10] + $answers[19] + $answers[29] + $answers[34]; ?>
					<?php $totalN = $answers[2] + $answers[11] + $answers[18] + $answers[28] + $answers[35]; ?>
					<?php if($totalN > $totalS): ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala NS: N de iNtuition</th></tr>
					<?php else: ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala NS: S de Sensing</th></tr>
					<?php endif; ?>
					<tr align=middle>
						<th>Resultados de iNtuition</th>
						<td><?php echo $answers['2a']; ?></td>
						<td><?php echo $answers['6b']; ?></td>
						<td><?php echo $answers['10a']; ?></td>
						<td><?php echo $answers['15a']; ?></td>
						<td><?php echo $answers['18b']; ?></td>
					</tr>
					<tr align=middle>
						<th>N Total</th>
						<th colspan="6"><?php echo $totalN; ?></th>
					</tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr align=middle>
						<th>Resultados de Sensing</th>
						<td><?php echo $answers['2b']; ?></td>
						<td><?php echo $answers['6a']; ?></td>
						<td><?php echo $answers['10b']; ?></td>
						<td><?php echo $answers['15b']; ?></td>
						<td><?php echo $answers['18a']; ?></td>
					</tr>
					<tr align=middle>
						<th>S Total</th>
						<th colspan="6"><?php echo $totalS; ?></th>
					</tr>

					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>



					<tr><th colspan="7" style="background-color: #444; color: #FFF;">¿Cómo tomas decisiones?</th></tr>
					<?php $totalT = $answers[4] + $answers[12] + $answers[21] + $answers[31] + $answers[39]; ?>
					<?php $totalF = $answers[5] + $answers[13] + $answers[20] + $answers[30] + $answers[38]; ?>
					<?php if($totalT > $totalF): ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala TF: T de Thinking</th></tr>
					<?php else: ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala TF: F de Feeling</th></tr>
					<?php endif; ?>
					<tr align=middle>
						<th>Resultados de Thinking</th>
						<td><?php echo $answers['3a']; ?></td>
						<td><?php echo $answers['7a']; ?></td>
						<td><?php echo $answers['11b']; ?></td>
						<td><?php echo $answers['16b']; ?></td>
						<td><?php echo $answers['20b']; ?></td>
					</tr>
					<tr align=middle>
						<th>T Total</th>
						<th colspan="6"><?php echo $totalT; ?></th>
					</tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr align=middle>
						<th>Resultados de Feeling</th>
						<td><?php echo $answers['3b']; ?></td>
						<td><?php echo $answers['7b']; ?></td>
						<td><?php echo $answers['11a']; ?></td>
						<td><?php echo $answers['16a']; ?></td>
						<td><?php echo $answers['20a']; ?></td>
					</tr>
					<tr align=middle>
						<th>F Total</th>
						<th colspan="6"><?php echo $totalF; ?></th>
					</tr>

					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>



					<tr><th colspan="7" style="background-color: #444; color: #FFF;">¿Cómo te orientas en relación al mundo exterior?</th></tr>
					<?php $totalP = $answers[6] + $answers[14] + $answers[25] + $answers[33] + $answers[36]; ?>
					<?php $totalJ = $answers[7] + $answers[15] + $answers[24] + $answers[32] + $answers[37]; ?>
					<?php if($totalP > $totalJ): ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala PJ: P de Perceiving</th></tr>
					<?php else: ?>
						<tr><th colspan="7" style="background-color: #777; color: #FFF;">La escala PJ: J de Judging</th></tr>
					<?php endif; ?>
					<tr align=middle>
						<th>Resultados de Perceiving</th>
						<td><?php echo $answers['4a']; ?></td>
						<td><?php echo $answers['8a']; ?></td>
						<td><?php echo $answers['13b']; ?></td>
						<td><?php echo $answers['17b']; ?></td>
						<td><?php echo $answers['19a']; ?></td>
					</tr>
					<tr align=middle>
						<th>P Total</th>
						<th colspan="6"><?php echo $totalP; ?></th>
					</tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr align=middle>
						<th>Resultados de Judging</th>
						<td><?php echo $answers['4b']; ?></td>
						<td><?php echo $answers['8b']; ?></td>
						<td><?php echo $answers['13a']; ?></td>
						<td><?php echo $answers['17a']; ?></td>
						<td><?php echo $answers['19b']; ?></td>
					</tr>
					<tr align=middle>
						<th>J Total</th>
						<th colspan="6"><?php echo $totalJ; ?></th>
					</tr>

					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>
					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>



					<tr><th colspan="7" style="background-color: #777; color: #FFF;">Tu Tipo de Preferencias MBTI</th></tr>
					<?php $mbti = (($totalI>$totalE)?'I':'E') . (($totalN>$totalS)?'N':'S') . (($totalT>$totalF)?'T':'F') . (($totalP>$totalJ)?'P':'J'); ?>
					<tr><th colspan="7" style="background-color: #444; color: #FFF;"><font color=red size=+2><?php echo $mbti ; ?></font></th></tr>

					<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

					<tr><th colspan="7" style="background-color: #DDD; color: #00A;">
						<a style="color: #00A;" href="<?php echo 'http://www.actus.com.ar/mbti/chart?' .
							$answers['1a'] . '&' . $answers['1b'] .
							$answers['2a'] . '&' . $answers['2b'] .
							$answers['3a'] . '&' . $answers['3b'] .
							$answers['4a'] . '&' . $answers['4b'] .
							$answers['5a'] . '&' . $answers['5b'] .
							$answers['6a'] . '&' . $answers['6b'] .
							$answers['7a'] . '&' . $answers['7b'] .
							$answers['8a'] . '&' . $answers['8b'] .
							$answers['9a'] . '&' . $answers['9b'] .
							$answers['10a'] . '&' . $answers['10b'] .
							$answers['11a'] . '&' . $answers['11b'] .
							$answers['12a'] . '&' . $answers['12b'] .
							$answers['13a'] . '&' . $answers['13b'] .
							$answers['14a'] . '&' . $answers['14b'] .
							$answers['15a'] . '&' . $answers['15b'] .
							$answers['16a'] . '&' . $answers['16b'] .
							$answers['17a'] . '&' . $answers['17b'] .
							$answers['18a'] . '&' . $answers['18b'] .
							$answers['19a'] . '&' . $answers['19b'] .
							$answers['20a'] . '&' . $answers['20b'];
						?>">
							Ver gr&aacute;fico
						</a>
					</th></tr>
				</table>
				<p>
					Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
				</p>
			</td>
		</tr>
	</table>
</body>
</html>