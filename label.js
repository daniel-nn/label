let modal = new bootstrap.Modal(document.getElementById('Registrar'));
        boton.addEventListener("click",function(){
            descripcion.textContent=dato.descripcion;
            console.log(dato.descripcion)
            modal.show()
        });


let 