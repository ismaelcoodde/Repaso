'use strict'

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

//Conseguir elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = 'yellow';

var div;

for(div in divsRojos){
    if(divsRojos[div].className == 'rojo'){
     divsRojos[div].style.background = 'red';   
    }
}

//Query selector

var id = document.querySelector('#encabezado');
console.log(id);
