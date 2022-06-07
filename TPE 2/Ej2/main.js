let Criptomonedas = ["Bitcoin","Etherium","Tether","BNB","Cardano","Dai","Helium","Shiba Inu","Tron","Crono s","Solana"]


Criptomonedas.unshift("Stellar")

let indice = Criptomonedas.indexOf("Shiba Inu")

Criptomonedas.splice(indice,2)
console.log(Criptomonedas)

Criptomonedas.push("Gate")
console.log(Criptomonedas)

const mostrar = () => {
    let indice = Criptomonedas.indexOf("Helium")
    
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

    
    Criptomonedas.forEach((element,index) => {
        let fila = `
        <li class="list-group-item"> Element: ${element}  <--> Index: ${index}</li>
        `


        bolsita.push (fila)
    });
    document.getElementById("lista").innerHTML = bolsita.join('')
}

document.getElementById('btn_mostrar').addEventListener("click",recorrer);