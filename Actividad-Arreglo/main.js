/*1. Crear una función que imprima en un párrafo lo siguiente:
a) La longitud del arreglo
b) El ultimo elemento del arreglo
c) El tercer elemento del arreglo
2. Crear una función que recorra el arreglo y lo imprima en un console.log(). Hacer uso de
forEach para dicho recorrido.
 */
let lenguajes = ["Python","JavaScript","Csharp","C++","Java","PHP","Ruby"]

const arreglo = () =>{
    let final = lenguajes [lenguajes.length-1]
    let index=lenguajes.indexOf("Csharp")
        document.getElementById('parrafo').textContent=`
            La longitud de su arrelgo es ${lenguajes.length}
            El ultimo elemento de su arreglo es ${final}
            El tercer elemento de su arreglo es ${index}
        `

}

const recorrer = () =>{

    lenguajes.forEach( (element) => {
        console.log(`
            Elemento del arreglo =${element}
        `)
        
    
    })
}

/*3. Agregar en lenguaje ‘Go’ al final del arreglo.
4. Eliminar el primer lenguaje del arreglo
5. Agregar al inicio del arreglo el lenguaje ‘Kotlin’
6. Eliminar el lenguaje Java y Php mediante el uso de splice(posición,elementos)
7. Finalmente imprimir el arreglo en un console.log() */

lenguajes.push('Go')
console.log(` Se agrega lenguaje ${lenguajes} al final del arreglo`)
lenguajes.shift