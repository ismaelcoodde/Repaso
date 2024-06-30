'use strict'

/*
1 - Formulario campos: Nombre, Apellidos, Edad.
2- Boton de enviar el formulario: evento submit.
3- Mostrar datos por pantalla.
4- Tener un boton que al darle click nos muetra los datos actuales del formulario.
*/

window.addEventListener('load', function(){
    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log('Evento capturado');

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector('#p_nombre span');
    var p_apellidos = document.querySelector('#p_apellidos span');
    var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;
    })
})