'use strict'

//BOM - Browser Object Model

function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    }

    function redirect(url){ //Redirige ventana
        window.location.href = url;
    }

    function abrirVentana(url){ //crea una ventana nueva
        window.open (url);
    }
getBom()