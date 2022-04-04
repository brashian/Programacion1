//cuando tiene 1 sola linea de codigo se pueden sacar las llaves
// es una funcion mas limpia y corta
const mostrar =() => {
            document.getElementById("inp_dato").value = 10
            document.getElementById("h_titulo").textContent ='Probando funcion flecha'
}

//obtengo el elemente boton, mediante el id
   const boton = document.getElementById("btn_mostrar")
   //indicamos el evento a escuchar (en este caso el click)
   //si se escucha el click, invoca la funcion mostrar
   boton.addEventListener("click",mostrar)