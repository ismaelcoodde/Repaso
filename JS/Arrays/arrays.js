'use strict'

//Arrays, Arreglos, Matrices

var peliculas = ["Torrente","Titanic","Ali G"]

var elemento = parseInt(prompt('Que elemento del Array quieres?'));
if(elemento >= peliculas.length){
    alert ('Introduce un número correcto menor que '+peliculas.length)
}else{
    alert ("El usuario seleccionado es: "+peliculas[elemento])
}
