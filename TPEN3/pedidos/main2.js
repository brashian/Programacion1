
import Pedidos from "./pedidos.js"

const mostrar_tarjetas = ( ) =>{

    const pedido = new Pedidos()
    pedido.crear_tarjetas()
}
mostrar_tarjetas()

const mostrar_tabla = () => {
    let indice = localStorage.getItem("indice_pedido")
    const pedido = new Pedidos()
    pedido.agregar_pedido(indice)
   
}
document.getElementById("btn_agregar").addEventListener("click",mostrar_tabla)

const finalizar = () =>{
 let cliente = document.getElementById("inp_cliente").value
const pedido = new Pedidos(cliente)
pedido.finalizar_pedido()

}
document.getElementById("btn_finalizar").addEventListener("click",finalizar)

