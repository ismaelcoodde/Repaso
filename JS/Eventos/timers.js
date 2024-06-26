'use strict'

window.addEventListener('load', function () {
    //Timers
    var tiempo = setInterval(function () {

      var encabezado = document.querySelector('h1')
      if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
      }else{
        encabezado.style.fontSize = "50px"
      }
    }, 1000)
    var stop = document.querySelector('#stop');

    stop.addEventListener("click", function(){
        alert  ('Has parado el intervalo en bucle')
        clearInterval(tiempo);
    })
});