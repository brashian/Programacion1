import Pedidos from "./pedidos.js"

const mostrar_tarjetas = ( ) =>{

    const pedido = new Pedidos()
    pedido.crear_tarjetas()
}
mostrar_tarjetas()

const mostrar_tabla = () => {
    let indice = localStorage.getItem("indice_pedido")
    const pedido = new Pedidos
    pedido.tabla_pedidos(indice)
    
}
document.getElementById("btn_agregar").addEventListener("click",mostrar_tabla)

