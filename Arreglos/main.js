//crear un array

let helados = ["Cereza","Banana Split","Dulce de leche"]

//mostrar longitud de un arreglo

console.log(`
    Longitud de array = ${helados.length}
`)

 //acceso a un elemento de un array mediante su indece
    let elemento = helados[1]
    

 //acceder al ultimo elemento
  let ultimo_elemento=helados[helados.length-1]
    console.log(`
    Ultimo elemento: ${ultimo_elemento} 
    `)


//recorrer un arreglo haciendo uso de foreach

helados.forEach( (element,index) => {
    console.log(`
        Index Array= ${index} Element array =${element}
    `)
    

})

//como agregar un elemento al final de un arreglo
    helados.push("Pistacho")
    console.log(`
    helados.push("Pistacho") añadio Pistacho al final del array= ${helados}
    `)

//Como elimino el ultimo element de un array
//no hace falta especificar el element, elimina el ultimo
helados.pop()
console.log(`
    helados.pop() saca el ultimo elemento del array (Pistacho) = ${helados}
    `)

//Como agregar un elemento al inicio de un array
helados.unshift("Menta granizada")
console.log(`
    helados.unshift("Menta granizada") añade Menta granizada al inicio del array= ${helados}
    `)

//Como eliminar el primer element de un array
//no hace falta especificar el element, elimina el 1ero
helados.shift()
console.log(`
    helados.shift() saca el 1er elemento del array (Menta Granizada) = ${helados}
    `)

//Como encontrar los indeces de un element de un array
//tiene que estar escrito identicamente
let indice=helados.indexOf("Banana Split")
console.log(`
    posicion del elemento Banana Split = ${indice}
`)

//Eliminar un elemento segun su indice
//pide posicion inicial, luego un numero de elementos a eliminar a su derecha
//uso variable, con la cual busque el indice del elemento
helados.splice(indice,1)
console.log(helados)


//Eliminar varios elementos de un arreglo
//elimina a partir de la posicion start 0 y la cantidad que le marquemos hacia la derecha..
helados.splice(0,2)
console.log(helados)

//Copiar un arreglo
//añado un elemento, para que tenga algo
helados.push("Marroc")
//comienza la copia,me la genera y la guarda en una variable.
let copia =helados.slice()
//añado otro elemento al final de la copia.
copia.push("Chocolate")
console.log(copia)
//solo se modifico la copia, no helado.
console.log(helados)