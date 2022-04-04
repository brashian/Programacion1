const mostrar =() => {
    const bm = document.getElementById("inp_basemenor").value
    const BM = document.getElementById("inp_basemayor").value
    const h = document.getElementById("inp_altura").value
 
    const suma = parseInt(bm)+ parseInt(BM)
    
    const resultado = suma*parseInt(h) / 2
 
    document.getElementById("h_titulo").textContent = resultado
    
 }
const boton = document.getElementById("btn_mostrar")
   boton.addEventListener("click",mostrar)

