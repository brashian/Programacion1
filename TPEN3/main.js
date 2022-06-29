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