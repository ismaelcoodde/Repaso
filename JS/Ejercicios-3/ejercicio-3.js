'use strict'

/*
1 - Formulario campos: Nombre, Apellidos, Edad.
2- Boton de enviar el formulario: evento submit.
3- Mostrar datos por pantalla.
4- Tener un boton que al darle click nos muetra los datos actuales del formulario.
*/

/** window.addEventListener('load', function(){
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");
    })
}); */


window.addEventListener('load', function(){
    var formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(){
        console.log('Evento capturado');

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;

    console.log(nombre, apellidos, edad);

    })
})