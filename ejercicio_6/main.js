let Marcas = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Chery"]

console.log(`
    Longitud del arreglo presentado: ${Marcas.length}
`)
//accedo y muesto el elemento final
let elemento_final=Marcas[Marcas.length-1]
console.log(`
Ultimo elemento: ${elemento_final} 
`)

//recorro el array, muestro el indice con su elemento
Marcas.forEach( (element,index) => {
    console.log(`
        Indice del arreglo= ${index} Elemento del arreglo =${element}
    `)
    

})

//añado ferrari al final del array
Marcas.push("Ferrari")
console.log(Marcas)
//elimino el ultimo elemento  "ferrari" del array
Marcas.pop()
console.log(Marcas)

//añado Tesla al inicio del array
Marcas.unshift("Tesla")
console.log(Marcas)

//elimino el primer elemento del array (Tesla)
Marcas.shift()


//busco el indice de unos de los elementos
let index=Marcas.indexOf("Seat")
console.log(`
    El index del elemento Seat es = ${index}
`)

//elimino los elementos continuos a Seat
//marco el start con el indice antes buscado de Seat y elimino 5 elementos,contando al mismo, hacia la derecha.
Marcas.splice(index,5)
console.log(Marcas)

    
//copia y variantes con original

Marcas.push("Porsche")

let copia= Marcas.slice()
copia.push("Buggatti")
//se ve como el añadido a copia no afecta al original
console.log(Marcas)
console.log(copia)