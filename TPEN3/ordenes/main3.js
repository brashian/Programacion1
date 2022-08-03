import Ordenes from "./ordenes.js"

const mostrar_ordenes = ( ) =>{

    const orden = new Ordenes()
    orden.estado_pedidos()
}
mostrar_ordenes()

const actualizar_orden = () =>{
    let index = localStorage.getItem("indice_ordenes")
    const orden = new Ordenes()
    orden.actualizar_orden(index)
    
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar_orden)