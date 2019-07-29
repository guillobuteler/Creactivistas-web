<div class="h1-box">
	<h1>Tus resultados</h1>
</div>
<table id="mbti" border=1>
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
		<?php $totalI = $answers[1] + $answers[8] + $answers[16] + $answers[22] + $answers[27]; ?>
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
		<?php $totalE = $answers[0] + $answers[9] + $answers[17] + $answers[23] + $answers[26]; ?>
		<th colspan="6"><?php echo $totalE; ?></th>
	</tr>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

	<tr><th colspan="7" class="tipo1">¿Dónde preferís enfocar tu atención?</th></tr>
	<?php if($totalI > $totalE): ?>
		<tr><th colspan="7" class="tipo2">La escala IE: I de Introversion</th></tr>
	<?php else: ?>
		<tr><th colspan="7" class="tipo2">La escala IE: E de Extroversion</th></tr>
	<?php endif; ?>
	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

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
		<?php $totalN = $answers[2] + $answers[11] + $answers[18] + $answers[28] + $answers[35]; ?>
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
		<?php $totalS = $answers[3] + $answers[10] + $answers[19] + $answers[29] + $answers[34]; ?>
		<th colspan="6"><?php echo $totalS; ?></th>
	</tr>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

	<tr><th colspan="7" class="tipo1">¿Cómo procesas información y te enteras de cosas?</th></tr>
	<?php if($totalN > $totalS): ?>
		<tr><th colspan="7" class="tipo2">La escala NS: N de iNtuition</th></tr>
	<?php else: ?>
		<tr><th colspan="7" class="tipo2">La escala NS: S de Sensing</th></tr>
	<?php endif; ?>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

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
		<?php $totalT = $answers[4] + $answers[12] + $answers[21] + $answers[31] + $answers[39]; ?>
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
		<?php $totalF = $answers[5] + $answers[13] + $answers[20] + $answers[30] + $answers[38]; ?>
		<th colspan="6"><?php echo $totalF; ?></th>
	</tr>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

	<tr><th colspan="7" class="tipo1">¿Cómo tomas decisiones?</th></tr>
	<?php if($totalT > $totalF): ?>
		<tr><th colspan="7" class="tipo2">La escala TF: T de Thinking</th></tr>
	<?php else: ?>
		<tr><th colspan="7" class="tipo2">La escala TF: F de Feeling</th></tr>
	<?php endif; ?>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

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
		<?php $totalP = $answers[6] + $answers[14] + $answers[25] + $answers[33] + $answers[36]; ?>
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
		<?php $totalJ = $answers[7] + $answers[15] + $answers[24] + $answers[32] + $answers[37]; ?>
		<th colspan="6"><?php echo $totalJ; ?></th>
	</tr>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

	<tr><th colspan="7" class="tipo1">¿Cómo te orientas en relación al mundo exterior?</th></tr>
	<?php if($totalP > $totalJ): ?>
		<tr><th colspan="7" class="tipo2">La escala PJ: P de Perceiving</th></tr>
	<?php else: ?>
		<tr><th colspan="7" class="tipo2">La escala PJ: J de Judging</th></tr>
	<?php endif; ?>

	<tr><td colspan="7"><span style="display: block; height: 18px;">&nbsp;</span></td></tr>

	<tr><th colspan="7" class="tipo1">Tu Tipo de Preferencias MBTI</th></tr>
	<?php $mbti = (($totalI>$totalE)?'I':'E') . (($totalN>$totalS)?'N':'S') . (($totalT>$totalF)?'T':'F') . (($totalP>$totalJ)?'P':'J'); ?>
	<tr><th colspan="7" class="type"><?php echo $mbti ; ?></th></tr>
</table>
<p>
	Muchas gracias por confiar en nosotros, si te interesa recibir un feedback personalizado acerca de tu perfil de personalidad o solicitar el armado de tu gráfico de los 4 elementos por favor escribinos a <a href="mailto:contacto@actus.com.ar">contacto@actus.com.ar</a> para coordinar una entrevista.
</p>