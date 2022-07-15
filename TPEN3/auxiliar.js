function indice(index){
    localStorage.setItem("indice",index)
}



function actualizar (index){
    let productos = JSON.parse(localStorage.getItem("lista_productos"))
    
   
    document.getElementById("inp_nombre").value = productos[index].nombre 
    document.getElementById("inp_precio").value = productos[index].precio 
    document.getElementById("inp_imagen").value = productos[index].imagen 
    document.getElementById("inp_detalle").value = productos[index].detalle
    
    localStorage.setItem("indice_update",index)

    document.getElementById("btn_actualizar").style.display = "block"
    document.getElementById("btn_guardar").style.display = "none"


}

