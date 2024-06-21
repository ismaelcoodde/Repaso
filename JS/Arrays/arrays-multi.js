'use strict'

/*
Arrays Multidimensional
*/
var categorias = ['Humor', 'Drama', "Acción"]
var peliculas = ['Carate Kid', '7 Almas', 'Ali G']

var cine = [categorias, peliculas];

console.log(cine[0][2]);
console.log(cine[1][0]);

console.log('***********************************')

//Añadir  a un Array
var juegos = ['Lineage2','Counter-Strike 1.6', 'World Of Warcraft'];

var elemento = "";

do{
    elemento = prompt('Introduce tu juego favorito');
    juegos.push(elemento);
}while(elemento != "acabar");
juegos.pop(); //Para que no se añada el ultimo array
console.log(juegos)

console.log('***********************************')

//Borrar un Array
var lenguajes = ['Español','Ingles', 'Frances', 'Chino'];
var indice = lenguajes.indexOf('Frances');

if (indice > -1) {
    lenguajes.splice(indice,1)
}
console.log(lenguajes)
