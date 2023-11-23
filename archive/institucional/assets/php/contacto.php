<div id="contacto_top" class="img">
	<p>Si quieres ir rápido, ve sólo; pero si quieres ir lejos, ve acompañado.</p>
</div>
<div id="contacto">
	<h2>CONTACTO</h2>
	<form action="assets/php/enviar.php" method="post" onsubmit="return validar_form()">
		<label for="nombre">Nombre<span>*</span></label>
		<div><input type="text" name="nombre" id="nombre" /></div>
		<label for="email">Email<span>*</span></label>
		<div><input type="text" name="email" id="email" /></div>
		<label for="telefono">Telefono<span>*</span></label>
		<div><input type="text" name="telefono" id="telefono" /></div>
		<label for="asunto">Asunto<span>*</span></label>
		<div><input type="text" name="asunto" id="asunto" /></div>
		<label for="mensaje">Mensaje<span>*</span></label>
		<div><textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea></div>
		<div><input type="submit" value="Enviar" /></div>
		<?php echo isset($_GET['error']) ? '<span id="error_form">*La información ingresada no es válida o está incompleta.</span>' : '' ;?>
	</form>
</div>
<div id="contacto_bottom"></div>
<script type="text/javascript" src="assets/js/form.js"></script>