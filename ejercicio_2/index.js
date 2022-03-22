const valor = prompt("Ingrese calificacion")
alert(valor)

var nota = ( valor >= 7 ) ? 'Aprobado':'Desaprobado'
console.log(nota) 
//template string ``
console.log(`
    Tu calificacion en el taller
    de Programacion 1 es: ${nota}

`)

//se imprime en pantalla
document.write(valor)