//Comprobar disponibilidad
if(typeof(Storage) !=='undefined'){
    console.log('Local Storage Disponible');
}else{
    console.log('Local Storage No disponible');

}

//Guardas datos
localStorage.setItem('titulo', 'de HTML CSS y JS');

//Recuperar elemento
document.querySelector('.peliculas').innerHTML = localStorage.getItem('titulo');

//Guardas Objetos
var usuario = {
    nombre: 'Ismael Cruz',
    edad: '29',
    nacionalidad: 'Española'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

//Recuperae Objeto

 var userjs = JSON.parse(localStorage.getItem('usuario'));
 console.log(userjs);
 document.querySelector('.datos').append(userjs.nombre)
