'use strict'

//Ejercicios Araays

/*
1- Que pida 6 numeros por pantalla y lo meta en un Array.
2- Mostrar todo el Array entero (todos sus elementos) en el cuerpo de la página y consola.
3- Ordenarlo y mostrarlo.
4- Invertir su orden y mostrarlo.
5- Mostrar cuantos elementos tiene el Array.
6- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del Array"+textoCustom+"</h1>");
elementos.forEach((elemento, index) => {
    document.write("<strong>" + elemento + "</strong></br>");
});

}

//Pedir 6 numeros;
var numeros = [];


for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt('Introduce un numero', 0)));
}

//Mostrar en el cuerpo de la página
mostrarArray(numeros);

//Mostrar Array en la consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a, b){return a - b});
mostrarArray(numeros, 'ordenado')

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido')


//Contar elementos
document.write("<h1>El Array tiene: "+numeros.length+" elementos");

//Busqueda
var busqueda = parseInt(prompt('Busca un numero',0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>No lo he encontrado</h1>");
}

