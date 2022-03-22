
var numero = 6;


if (numero > 6) {
    console.log('estas aprobado')
    
}else{
    console.log('Nos vemos en diciembre')
}

//Otra forma de expresar una condicion
var respuesta = (numero <=4 ) ? 'Nos vemos en marzo':'Nos vemos en diciembre'
console.log(respuesta)

//diferencia entre let y var

//Uso de var
var x = 44;

if (x==44) {
    var x = 74//misma variable
    console.log(x)
}
console.log(x)

//uso de let

let y = 11;
if (y == 11) {
    let y = 22;
    console.log(y);
}
    console.log(y);