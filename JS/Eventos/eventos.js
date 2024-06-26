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