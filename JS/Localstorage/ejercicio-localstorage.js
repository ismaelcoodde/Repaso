'use strict'

var formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', function(){
   
    var titulo = document.querySelector('#addpelicula').value;
    
    if(titulo.lenght >= 1){
        localStorage.setItem(titulo, titulo)
    }
    
});
var ul = document.querySelector('#peliculaslist');
for(var i in localStorage){

    if(typeof localStorage[i] == 'string'){
        
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}