let consolas = ['PlayStation','Xbox','Nintento Game Cube','Sepa Dreamcast','Game Boy Advanced','Pokemon Mini']


//agrego la consola nintendo 64 al final del arreglo
consolas.push('Nintendo 64')
//busco el index de Game boy Advanced
let index=consolas.indexOf("Game Boy Advanced")
//con el index de GBA, con splice lo elimino junto a pokemon mini
consolas.splice(index,2)

const mostrar = () => {
    let final=consolas[consolas.length-1]    

document.getElementById('h2').textContent = ` 
    Longitud del arreglo: ${consolas.length}

`
document.getElementById('h2_final').textContent = `
    Elemento final del arreglo: ${final}
`

document.getElementById('h2_posicion').textContent = `  
    Posicion 4 del array: ${consolas[4]}
`
}

document.getElementById('btn').addEventListener("click",mostrar)

let con = []
const recorrido = () => {

    consolas.forEach((index,element) => {
        
        let fila = `
        <tr>
        <th>${element}</th>
        <td >${index}</td>
        </tr>
        `

        con.push(fila)
    });

    document.getElementById('t_body').innerHTML=con.join('')


}

document.getElementById('btn_tbl').addEventListener("click",recorrido)