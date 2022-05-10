/*Según el siguiente arreglo descripto a continuación, determinar lo siguiente:
let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
1. Crear una función que reciba dicho arreglo como parámetro y devuelva una copia
del arreglo.
2. Crear una función que devuelva el promedio de dicho arreglo
 */


const arreglo = (numeros) =>{
    let copia= numeros.slice()

    return `Su copia del arreglo ${copia}`

}

const datos = () => {
    let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]

    const respuesta = arreglo(numeros)
    console.log(respuesta)

}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",datos)

const promedio = () => {
    let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
    let sumas = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumas =  sumas += numeros[i]
        
    }
    let promedio = sumas/10
    document.getElementById('h1_promedio').textContent= `El promedio del array es = ${promedio}`
}
boton.addEventListener('click', promedio)

/*3. Crear una función que calcule el promedio dentro de dicho arreglo pero dentro de
un rango, esta función recibe el arreglo, un punto de partida y uno de termino y
devuelve el promedio de los valores dentro del rango especificado.
A tener en cuenta:
Para tomar rangos se debe trabajar de la siguiente manera:
let parteArreglo = miarray.slice(start, end);
Tener presente que el indice “end” no es inclusivo. */

const promedio_arreglo = () => {
    let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
    const start = document.getElementById('inp_start').value
    const end = document.getElementById('inp_end').value
    
    let parteArreglo= numeros.slice(start,end);
    let sumas = 0;
    let promedio = 0
    for (let i = 0; i < parteArreglo.length; i++) {
        sumas =  sumas += parteArreglo[i]
        promedio = promedio + i
    }
    let final = sumas/promedio
    document.getElementById('h1_arreglo').textContent= `El promedio del array es = ${final}`
}

boton.addEventListener('click', promedio_arreglo)

const posiciones = () => {
    let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
    const pos1 = document.getElementById('inp_elementoa').value
    const pos2 = document.getElementById('inp_elementob').value

    const eliminar2= numeros.splice(pos2,1)[0]

    
    numeros.splice(pos1,0,eliminar2)
    document.getElementById('h2_swap').textContent= `sus cambios fueron hechos ${numeros}`
}
boton.addEventListener('click', posiciones)
