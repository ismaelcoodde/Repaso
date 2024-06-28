'use strict'

//JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Bartman',
    year: '2017',
    pais: 'España'
}
    

var caja_peliculas = document.querySelector('#peliculas');
var index;
for(index in pelicula){
    var p = document.createElement('p');
    p.append(pelicula[index].titulo + " " +pelicula[index].year);
    caja_peliculas.append(p);
}
