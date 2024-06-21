'use strict'

/*Calculadora
 -Pide dos numeros por pantalla
 Si metemos uno mal que nos lo vuelva a pedir
*/

var numero1 = parseInt(prompt('Introduce el primer numero',1));
var numero2 = parseInt(prompt('Introduce el segundo numero',1));

while(numero1 < 0 ||numero2 < 0 || isNaN(numero1) || isNaN(numero2) ){
    
var numero1 = parseInt(prompt('Introduce el primer numero',1));
var numero2 = parseInt(prompt('Introduce el segundo numero',1));
}

var resultado = "La suma es: "+(numero1+numero2)+" </br>"+
                "La resta es: "+(numero1-numero2)+" </br>"+
                "La división es: "+(numero1/numero2)+" </br>"+
                "La multiplicación es: "+(numero1*numero2)+" </br>"

document.write(resultado)
