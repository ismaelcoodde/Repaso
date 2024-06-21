'use strict'

//Plantillas texto, concatenar.

var nombre = prompt('Introduce tu nombre');
var apellidos = prompt('Introduce tus apellidos');

var texto = `

<h1>Hola mi nombre es: ${nombre} con apellido: ${apellidos}</h1>

`
document.write(texto)