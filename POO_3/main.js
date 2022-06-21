import Cliente from "./cliente.js";

function guardar (){
    let nombre = document.getElementById("inp_nombre").value
    let apellido = document.getElementById("inp_apellido").value
    let dni = document.getElementById("inp_dni").value

    let cliente =    new Cliente(nombre,apellido,dni)
    cliente.guardar_cliente()

    
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar (){
    let cliente = new Cliente
    cliente.obtener_cliente()
}
listar()

function eliminar (){
    let indice = localStorage.getItem("indice")
    const cliente = new Cliente()
    cliente.eliminar_cliente(indice)
   
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar () {
    let indice = localStorage.getItem("indice_update")

    let cliente = new Cliente
    cliente.actualizar_cliente(indice)
}