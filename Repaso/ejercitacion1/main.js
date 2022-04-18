


function Celcius(celc) {
    //1.8 (o 9/5) y sume 32.31 mar 2022
    const traspaso = (celc * 1.8) +32
    return traspaso
}

function mostrar_temperatura() {
    const celc = document.getElementById("inp_celcius").value

    const respuesta = Celcius(celc)
    document.getElementById("h1_respuesta").textContent = `El traspaso de Sus Cª A Fª es = ${respuesta}`
}

const inp = document.getElementById("inp_celcius")
inp.addEventListener("change",mostrar_temperatura)
