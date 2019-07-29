	<div class="large-box">
		<p>
			Este es un test de personalidad gratuito.
			<br />
			Se deriva del Myers Briggs Type Indicator (MBTI) y busca describir, con pocas variables, las preferencias de una persona.
			<br />
			Como todo test autoadministrable, refleja lo que un individuo cree de sí mismo y esa información es muy valiosa a la hora de empezar un camino de desarrollo personal o profesional.
			<br />
			La mayoría de los test online son pagos o agrupan los tipos psicológicos en “blanco y negro” sin discriminar cuáles son las proporciones de variables que hacen que cada persona sea una combinación única. ZOOM te dice cuánto tenés de cada cosa.
			<br />
			Sin respuesta correcta o incorrecta, cada preferencia es perfecta para distintos tipos de tareas, profesiones, rubros, equipos y hasta etapas de la vida.
			<br />
			Enjoy.
		</p>
	</div>
	<div class="medium-box">
		<p>Para cada par de frases completá los casilleros del 0 al 5 según la siguiente escala:</p>
		<p>
			<span class="valor-mbti">0</span> = no lo prefiero casi nunca
			<br />
			<span class="valor-mbti">1</span> = pocas veces lo prefiero
			<br />
			<span class="valor-mbti">2-3</span> = a veces prefiero uno y a veces el otro
			<br />
			<span class="valor-mbti">4</span> = tengo una habitual preferencia
			<br />
			<span class="valor-mbti">5</span> = lo prefiero casi siempre
		</p>
	</div>
	<div id="form" class="form">
		<form action="mbti.php" method="post">
			<h2>Prefiero:</h2>
			<?php foreach ($questions as $key => $value): ?>
				<div class="input number">
					<label for="<?php echo $key; ?>"><?php echo $value; ?></label>
					<input name="<?php echo $key; ?>" type="number" id="<?php echo $key; ?>" required>
				</div>
			<?php endforeach; ?>
			<br />
			<div class="medium-box">
				<span>&nbsp;</span>
				<div class="input text required">
					<label for="name">Nombre</label>
					<input name="name" maxlength="255" type="text" id="name" required>
				</div>
				<span style="display: none;">&nbsp;</span>
				<div class="input">&nbsp;</div>
				<span>Si ingresa su email el sistema le enviará los resultados.</span>
				<div class="input text">
					<label for="email">Email</label>
					<input name="email" maxlength="255" type="email" id="email">
				</div>
			</div>
			<br />
			<br />
			<div><input type="submit" value="Procesar" /></div>
		</form>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			$('input').change(function() {
				if ($(this).val() < 0) {
					alert('Debe ingresar un número entre 0 y 5.');
					$(this).val(0);
				}
				if ($(this).val() > 5) {
					alert('Debe ingresar un número entre 0 y 5.');
					$(this).val(5);
				}
			});
			$('form').submit(function() {
				var complete = true;
				$(this).find('input').each(function() {
					if ($(this).val() == '' && $(this).attr('id') != 'email') {
						complete = false;
					}
				});
				if (complete == true) {
					return true;
				} else {
					alert('Debe completar todas las respuestas y su nombre.')
					return false;
				}
			});
		});
	</script>