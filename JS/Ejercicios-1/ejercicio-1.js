'use strict'

/*
Programa que nos pida dos numeros y nos diga cual es el mayor, el menor y si son iguales.
*/

var numero1 = parseInt(prompt('Introduce el primer numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

if(numero1 > numero2){
    alert("El numero mayor es: "+numero1);
    alert("El numero menor es: "+numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es: "+numero2);
    alert("El numero menor es: "+numero1);
}else{
    alert("Introduce numeros")
}