let modal = new bootstrap.Modal(document.getElementById('Registrar'));
        boton.addEventListener("click",function(){
            descripcion.textContent=dato.descripcion;
            console.log(dato.descripcion)
            modal.show()
        });


        let p1 = document.getElementById("contraseña1").value;
        let p2 = document.getElementById("contraseña2").value;
        
        if (p1 != p2) {
            alert("Las contraeñas deben de coincidir");
            return false;
          } else {
            alert("Todo esta correcto");
            return true; 
          };