//Operadores lógicos

var year = 2018;
// Negación: !

if(year != 2009){
    console.log("El año no es 2009 es: "+year)
}
// (Y): &&
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era post-moderna")

}
// (O): ||
if(year == 2019 || year == 2018){
    console.log("El año acaba en 8")
}