const triangulo = (anguloa,angulob,anguloc) => {

    const calculo = anguloa+angulob+anguloc
    var respuesta= (calculo ==180) ? 'Su triangulo es valido ':'Su triangulo no es valido'
    return respuesta
    
}


const mostrar_resultado =() => {
    const anguloa = parseInt(document.getElementById("inp_angulo").value)
    const angulob = parseInt(document.getElementById("inp_angulo2").value)
    const anguloc = parseInt(document.getElementById("inp_angulo3").value)

    const respuesta = triangulo(anguloa,angulob,anguloc)



    document.getElementById("h1_respuesta").textContent = respuesta

}

const boton=document.getElementById("boton")
boton.addEventListener("click",mostrar_resultado)