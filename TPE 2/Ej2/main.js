let Criptomonedas = ["Bitcoin","Etherium","Tether","BNB","Cardano","Dai","Helium","Shiba Inu","Tron","Crono s","Solana"]

//se añade Stellar al principio del arreglo con unshift
Criptomonedas.unshift("Stellar")
//busqueda de indice mediante indexOf
let indice = Criptomonedas.indexOf("Shiba Inu")
//con el indice anterior y splice se elimina el lugar y el consiguiente (2 lugares)
Criptomonedas.splice(indice,2)

//adicion de Gate al final del arreglo
Criptomonedas.push("Gate")
console.log(Criptomonedas)

const mostrar = () => {
    //busqueda de indice de un elemento
    let indice = Criptomonedas.indexOf("Helium")
    //se muestra el largo del arreglo, ultimo elemento y el indice y moneda Helium
    document.getElementById("p_criptos").innerHTML = `
    
    Longitud del arreglo: ${Criptomonedas.length}
    <br>
    Ultimo elemento del arreglo: ${Criptomonedas[Criptomonedas.length-1]}
    <br>
    Moneda Helium: ${indice} - ${Criptomonedas[indice]}
    
    `
  
}

document.getElementById('btn_parrafo').addEventListener("click",mostrar)

let bolsita = []
const recorrer = () => {

    //Mediante un forEach se recorre el arreglo para meter las "fila" dentro del arreglo bolsita con push
    //Luego se elimina el contenido `` mediante join, generando una lista con elementos y indices
    Criptomonedas.forEach((element,index) => {
        let fila = `
        <li class="list-group-item list-group-item-dark fw-bold"> Element: ${element}  <--> Index: ${index}</li>
        `


        bolsita.push (fila)
    });
    document.getElementById("lista").innerHTML = bolsita.join('')
}
//escucha de un evento
document.getElementById('btn_mostrar').addEventListener("click",recorrer);