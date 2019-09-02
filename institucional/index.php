<?php
	$get_seccion = isset( $_GET['seccion'] ) ? $_GET['seccion'] : '';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>ACTUS - Gestión de talento</title>
		<link rel="shortcut icon" href="assets/img/favicon.ico" />
		<link rel="stylesheet" href="assets/css/styles.css" />
		<link rel="stylesheet" href="assets/css/fonts.css" />
		<script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
		<script type="text/javascript" src="assets/js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="assets/js/script.js"></script>

	</head>
	<body>
		<div class="container">
			<div id="header">
				<a href="index.php" id="logo">
					<img src="assets/img/logo.jpg" alt="ACTUS - Gestión de talento" />
				</a>
				<a href="/mbti/" id="zoom">
					<img src="assets/img/zoom.jpg" alt="Zoom" />
				</a>
				<div id="social">
					<ul>
						<li><a href="http://www.facebook.com" onclick="window.open( this.href,'_blank'); return false;">Facebook</a></li>
						<li><a href="http://www.twitter.com" onclick="window.open( this.href,'_blank'); return false;">Twitter</a></li>
						<li><a href="http://www.linkedin.com" onclick="window.open( this.href,'_blank'); return false;">Linkedin</a></li>
					</ul>

				</div>
				<div id="nav">
					<ul>
						<li><a href="index.php">paradigma</a></li><li>
						<a href="index.php?seccion=propuesta">propuesta</a></li><li>
						<a href="index.php?seccion=equipo">equipo</a></li><li>
						<a href="index.php?seccion=contacto">contacto</a></li>
					</ul>
				</div>
				<div id="line" <?php echo isset($_GET['seccion']) ? 'class="'.$_GET['seccion'].'"' : 'class=paradigma' ;?>></div>
			</div>
			<div id="loader">
				<img src="assets/img/loader.gif" alt="loader"/>
			</div>
			<?php
				$file = 'assets/php/' . $get_seccion . '.php';

			if( empty( $_GET ) ){
				sleep(1);
				include('assets/php/paradigma.php');
			}else if(file_exists($file)){
				sleep(1);
				include($file);
			} else {
				include_once('assets/php/404.php');
			}
			?>
			<div id="footer">
				<p>Martinez - Buenos Aires - 54.11.5495.7059</p>
			</div>
		</div>
	</body>
</html>