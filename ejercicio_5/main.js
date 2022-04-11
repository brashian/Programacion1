


const calcular_raices =(ValorA,ValorB,ValorC) => {
    
    const res_bloque1=Math.pow(ValorB,2) - 4 * ValorA * ValorC

    const res_mas = -ValorB + Math.sqrt(res_bloque1)
    const res_menos = -ValorB - Math.sqrt(res_bloque1)

   

    const resultado1 = res_mas / (2 * ValorA)
    const resultado2 = res_menos / (2 * ValorA)

    return 'resultado 1= '+resultado1+' resultado 2= '+resultado2
}

const mostrar_resultado =() => {
    const ValorA = parseInt(document.getElementById('inp_valora').value)
    const ValorB = parseInt(document.getElementById('inp_valorb').value)
    const ValorC = parseInt(document.getElementById('inp_valorc').value)

    const respuesta = calcular_raices(ValorA,ValorB,ValorC)



    document.getElementById("h_titulo").textContent = respuesta

}
       

 const boton = document.getElementById("btn_mostrar")
   boton.addEventListener("click",mostrar_resultado)