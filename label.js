let modal = new bootstrap.Modal(document.getElementById('Registrar'));
        boton.addEventListener("click",function(){
            descripcion.textContent=dato.descripcion;
            console.log(dato.descripcion)
            modal.show()
        });


        function verificarPasswords() {
 
            // Ontenemos los valores de los campos de contraseñas 
            pass1 = document.getElementById('contraseña1');
            pass2 = document.getElementById('contraseña2');
         
            // Verificamos si las constraseñas no coinciden 
            if (pass1.value != pass2.value) {
         
                // Si las constraseñas no coinciden mostramos un mensaje 
                document.getElementById("error").classList.add("mostrar");
         
                return false;
            } else {
         
                // Si las contraseñas coinciden ocultamos el mensaje de error
                document.getElementById("error").classList.remove("mostrar");
         
                // Mostramos un mensaje mencionando que las Contraseñas coinciden 
                document.getElementById("ok").classList.remove("ocultar");
         
                // Desabilitamos el botón de login 
                document.getElementById("btnregistro").disabled = true;
         
                // Refrescamos la página (Simulación de envío del formulario) 
                setTimeout(function() {
                    location.reload();
                }, 3000);
         
                return true;
            }
         
        }