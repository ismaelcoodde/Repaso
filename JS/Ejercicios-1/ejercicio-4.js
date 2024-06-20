'use strict'

//Muestre todos los números divisores de un numero que introduzcas.

var numero = parseInt(prompt('Introducir el número', 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: "+i);
    }
}



