<?php
	if( isset($_POST['nombre']) ){
		$nombre = $_POST['nombre'];
		$nombre_patron = '//';
		
		$email = $_POST['email'];
		$email_patron = '/^[a-zA-Z0-9\._-]{3,}@[a-zA-Z0-9\.]{3,}\.{1,}[a-zA-Z]{2,4}$/';
		
		$telefono = $_POST['telefono'];
		$telefono_patron = '/^[0-9\+]{1,}[0-9\-]{7,}$/';

		$asunto = $_POST['asunto'];
		$asunto_patron = '/.{1,}/';
			
		$mensaje = $_POST['mensaje'];
		$mensaje_patron = '/.{3,}/';
			
			if (preg_match($nombre_patron, $nombre) === 0 || preg_match($email_patron, $email) === 0 || preg_match($telefono_patron, $telefono) === 0 || preg_match($asunto_patron, $asunto) === 0 || preg_match($mensaje_patron, $mensaje) === 0){
				echo 'null';				
			}else{
				/*
				$destino = 'mail@dominio.com';
				$asunto = 'Mensaje via Web';
				$contenido = '<div style="font:normal 12px Verdana; padding: 10px;">';
				$contenido .= '<h1 style="font: bold 18px Verdana;">Mensaje de: '.$nombre.'</h1>';
				$contenido .= '<p><strong>Remitente:</strong> '.$email.'</p>';
				$contenido .= '<p><strong>Telefono:</strong> '.$telefono.'</p>';
				$contenido .= '<p><strong>Asunto:</strong> '.$asunto.'</p>';
				$contenido .= '<p><strong>Comentario:</strong> '.$mensaje.'</p>';
				$contenido .= '</div>';
				
				$headers  = 'MIME-Version: 1.0' . "\r\n";
				$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
				$headers .= "From: $destino\r\n";
				$headers .= "To: $destino\r\n";
				//$headers .= "Cc: correo_copia@email.com\r\n";
				
				mail( $destino , $asunto , $contenido, $headers );*/
				echo '<strong>'.$nombre.'</strong>';				
			}
	}else{
		header("Location: ../../index.php?seccion=contacto");
	}
?>