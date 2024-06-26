//Añadir todo el codigo js en la funcion load para que lea el codigo despues de cargar la pagina

window.addEventListener('load', () => { //Funcion
    var boton = document.querySelector('#boton');

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == 'green'){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    return true;
}

//Click
boton.addEventListener('click', function(){
    cambiarColor();
});

//Mouseover
boton.addEventListener('mouseover', function(){
    boton.style.background = 'black';
});

//Mouseout
boton.addEventListener('mouseout', function(){
    boton.style.background = 'blue';
});


//Focus
var input = document.querySelector('#campo__nombre');

input.addEventListener('focus', function(){
console.log("Estas dentro de el input");
});

//Blur
var input = document.querySelector('#campo__nombre');

input.addEventListener('blur', function(){
console.log("Estas fuera de el input");
});

//Keydopwn
input.addEventListener('keydown', function(evento){
    console.log("Estas pulsando la tecla: ", String.fromCharCode(event.keyCode));
    });
    
//Keypress
input.addEventListener('keypress', function(evento){
    console.log("Estas pulsando la tecla: ");
    });
    
//Keyup
input.addEventListener('keypress', function(evento){
    console.log("Estas pulsando la tecla: ");
    });
    
});

