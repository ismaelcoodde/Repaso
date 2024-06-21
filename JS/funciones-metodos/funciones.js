'use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(){
    
    console.log("Hola")
    //return('Hola soy la calculadora')
}
calculadora();

/**********************************************************/


function calc (numero1, numero2){
    console.log('La suma es: '+(numero1+numero2));
    console.log('La resta es: '+(numero1-numero2));
    console.log('La multiplicación es: '+(numero1*numero2));
}
for(var i = 1; i <= 10; i++){
    console.log(i)
    calc(i,5)
}
