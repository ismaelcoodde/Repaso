'use strict'

/*
Que nos diga si un número es par o impar y si no es válido que lo pida de nuevo.
*/

var numero = parseInt(prompt('Introduce un numero', 0));

while (isNaN(numero)) {
     numero = parseInt(prompt('Introduce un numero', 0));
}
if(numero % 2 == 0) {
    alert('Es un número par')
}else{
    alert('Es impar')
}