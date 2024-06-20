'use strict'

//Hacer un programa que muestre todos los números entre dos numeros introducidos por el usuario.

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));


for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br>")
}