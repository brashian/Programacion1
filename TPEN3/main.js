import Producto from "./producto.js";

const guardar = () =>{
    const nombre = document.getElementById("inp_nombre").value
    const precio = document.getElementById("inp_precio").value
    const imagen = document.getElementById("inp_imagen").value
    const detalle = document.getElementById("inp_detalle").value

    const product = new Producto(nombre,precio,imagen,detalle)
    product.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

const mostrar_tabla = ( ) =>{

    const product = new Producto
    product.tabla_producto()
}
mostrar_tabla()

const eliminar = () =>{
    let indice = localStorage.getItem("indice")
    const product = new Producto
    product.eliminar_producto(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

const actualizacion_datos = () =>{
    let indice_update = localStorage.getItem("indice_update")
    const product = new Producto
    product.actualizar_producto(indice_update)
}
document.getElementById("btn_actualizar").addEventListener("click",actualizacion_datos)