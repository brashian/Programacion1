//crear un objeto

const miobjeto = {
    nombre: 'Juan',
    apellido:'Perez',
    dni: 39463490,
    correos:{
        gmail:'jp@gmail.com',
        outlook:'jp@outlook.com',
        yahoo:'jp@yahoo.com.ar',

    }

}
//imprimir en consola
console.log(miobjeto.apellido)

/*mostrar los correros (poco practico)
const gmail = miobjeto.correos.gmail;
const outlook = miobjeto.correos.outlook;
const yahoo = miobjeto.correos.yahoo;*/

//destructuring object
//se construye una constante y se accede a la propiedad
const { gmail, outlook, yahoo} =miobjeto.correos;

console.log(`
    Correos:
    Gmail: ${gmail}
    Outlook: ${outlook}
    Yahoo: ${yahoo}
`)

