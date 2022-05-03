
var lenguajes = ["Python","JavaScript","Csharp","C++","Java","PHP","Ruby"]


/*3. Agregar en lenguaje ‘Go’ al final del arreglo.
4. Eliminar el primer lenguaje del arreglo
5. Agregar al inicio del arreglo el lenguaje ‘Kotlin’
6. Eliminar el lenguaje Java y Php mediante el uso de splice(posición,elementos)
7. Finalmente imprimir el arreglo en un console.log() */

lenguajes.push('Go')
console.log(` Se agrega el elemento GO ${lenguajes} al final del arreglo`)
lenguajes.shift()
console.log(` Se elimina el primer elemento ${lenguajes}`
)
lenguajes.unshift('Kotlin')
console.log(`Se agrega un elemento al inicio del array ${lenguajes}`)
let index=lenguajes.indexOf("Java")
lenguajes.splice(index,2)
console.log(`Se eliminan Java Y PHP con index y el uso de splice = ${lenguajes}`)
/*1. Crear una función que imprima en un párrafo lo siguiente:
a) La longitud del arreglo
b) El ultimo elemento del arreglo
c) El tercer elemento del arreglo

 */
const arreglo = () =>{
    let final = lenguajes [lenguajes.length-1]
    let index=lenguajes.indexOf("Csharp")
        document.getElementById('parrafo').textContent=`
            La longitud de su arrelgo es ${lenguajes.length}
            El ultimo elemento de su arreglo es ${final}
            El tercer elemento de su arreglo es ${index}
        `

}
const boton = document.getElementById('btn_mostrar')
boton.addEventListener("click", arreglo)
/*2. Crear una función que recorra el arreglo y lo imprima en un console.log(). Hacer uso de
forEach para dicho recorrido.*/
const recorrer = () =>{

    lenguajes.forEach( (element) => {
        console.log(`
            Elemento del arreglo =${element}
        `)
        
    
    })
}
boton.addEventListener("click", recorrer)