'use strict'

//DOM - Document Objet Model 
function cambiarColor(color){
    caja.style.background = color; 
}

var caja = document.querySelector("#micaja");

caja.innerHTML = 'Ismael';
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "#ffffff";
console.log(caja);