var contact_form = document.getElementsByTagName('form')[0];
contact_form.onsubmit = function(){

	// EXPRESIÓN REGULAR NOMBRE

		var nombre = document.getElementById("nombre");
		var nombre_formato = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;

	// EXPRESIÓN REGULAR EMAIL

		var email = document.getElementById("email");
		var email_formato = /^[a-zA-Z0-9\._-]{3,}@[a-zA-Z0-9\.]{3,}\.{1,}[a-zA-Z]{2,4}$/;
		
	// EXPRESIÓN REGULAR TELEFONO

		var telefono = document.getElementById("telefono");
		var telefono_formato = /^[0-9\-\+]{7,15}$/;
		
	// EXPRESIÓN REGULAR ASUNTO

		var asunto = document.getElementById("asunto");
		var asunto_formato = /.{1,}/;

	// EXPRESIÓN REGULAR MENSAJE

		var mensaje = document.getElementById("mensaje");
		var mensaje_formato = /.{3,}/;

	function validar_input(input, formato){
			if(input.value.match(formato)){
				if(input.nextSibling){
					input.parentNode.removeChild(input.nextSibling);
				}
				input.style.background = "#eee";
				input.style.border = "1px solid #bec2c4";
				//input.style.boxShadow = "none";
				//input.style.fontWeight = "normal";
				input.style.color = "#777";
				
			}else{
				if(input.nextSibling){
					input.parentNode.removeChild(input.nextSibling);
				}
				input.style.border = "1px solid #d63921";
				input.style.color = "#d63921";
				var error = document.createElement('div');
				error.className = 'error-inner';
				error.innerHTML = 'La información ingresada no es válida.';
				input.parentNode.appendChild(error);
				//input.style.backgroundColor = "#FFD6D6";
				//input.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.5)";
				//input.style.fontWeight = "bold";
				return false;
			}
		}

		validar_input(nombre, nombre_formato);
		validar_input(email, email_formato);
		validar_input(telefono, telefono_formato);
		validar_input(asunto, asunto_formato);
		validar_input(mensaje, mensaje_formato);

		if(validar_input(nombre, nombre_formato)===false || validar_input(email, email_formato)===false || validar_input(telefono, telefono_formato)===false || validar_input(asunto, asunto_formato)===false || validar_input(mensaje, mensaje_formato)===false){
			return false;
		}else{
		
				var xmlhttp;
				 
				if (window.XMLHttpRequest){
					xmlhttp=new XMLHttpRequest();
				}else{
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				
				xmlhttp.onreadystatechange = function(){
					//document.getElementById("error_msg").style.display = 'none';
					document.getElementById("loader").style.display = 'block';
					if(xmlhttp.readyState == 4){
						if(xmlhttp.responseText == 'null'){
							document.getElementById("loader").style.display = 'none';
							//document.getElementById("error_msg").style.display = 'block';
						}else{
							document.getElementById("loader").style.display = 'none';
							var mensaje_enviado = document.createElement('p');
								mensaje_enviado.innerHTML = 'Estimado ' + xmlhttp.responseText + ', muchas gracias por habernos enviado su mensaje. Nos comunicaremos con usted a la brevedad.<br /><br /><em>El Equipo de Actus</em>.';
							//$('form').fadeOut('fast');
							$('form').animate({opacity: 0}, 'slow', function() {
								$(this).remove();
								document.getElementById("contacto").appendChild(mensaje_enviado);
							});
						}
					}
				}
			
			var nombre_value = nombre.value;
			var email_value = email.value;
			var telefono_value = telefono.value;
			var asunto_value = asunto.value;
			var mensaje_value = mensaje.value;
			 
			xmlhttp.open("POST","assets/php/enviar_mensaje.php",true);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlhttp.send("nombre=" + nombre_value + "&email=" + email_value + "&telefono=" + telefono_value + "&asunto=" + asunto_value + "&mensaje=" + mensaje_value);
			return false;
		}
}