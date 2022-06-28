function almacenar_indice(index){

    localStorage.setItem("indice",index)
    
}

function editar (index){

    let listado_clientes = JSON.parse(localStorage.getItem("listado_cliente"))
    //llena el formulario
    document.getElementById("inp_nombre").value = listado_clientes[index].nombre
    document.getElementById("inp_apellido").value = listado_clientes[index].apellido
    document.getElementById("inp_dni").value = listado_clientes[index].dni
    //guardamos en el storage el indice
    localStorage.setItem("indice_update",index)
    //se enciende el voton actualizar
    document.getElementById("btn_actualizar").style.display = "block"
    //se apaga el boton guardar
    document.getElementById("btn_guardar").style.display = "none"
}