export default class Producto{
    constructor(nombre,precio,imagen,detalle){
        this.nombre = nombre
       
        this.precio = precio
        this.imagen = imagen
        this.detalle= detalle
    }

    guardar_producto(){
        let new_product = {
            nombre: this.nombre,
           
            precio: this.precio,
            imagen: this.imagen,
            detalle: this.detalle
        }


        if("lista_productos" in localStorage){
            let productos = JSON.parse(localStorage.getItem("lista_productos"))
            productos.push(new_product)
            localStorage.setItem("lista_productos",JSON.stringify(productos))

        }else{
            let productos = []
            productos.push(new_product)
            localStorage.setItem("lista_productos",JSON.stringify(productos))
        }
        this.tabla_producto()
        this.vaciar()
    }

    tabla_producto(){
        let productos = JSON.parse(localStorage.getItem("lista_productos")) 
        let fila_producto = []
        productos.forEach((element,index) => {
            let elemento_producto=`<tr>
            <td class="fw-bold">${index}</td>
            <td class="fw-semibold">${element.nombre}</td>
            <td class="fw-semibold">$${element.precio}</td>
            <td><img src="${element.imagen}" style="width: 8rem; class="img-thumbnail"></td>
            <td class="fw-semibold">${element.detalle}</td>
            <td>
                <button onclick="indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm" ><i class="fa fa-trash"></i></button>
                <button onclick="actualizar(${index})" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
            </td>
        </tr>
        `
        fila_producto.push(elemento_producto)
        });
        
        document.getElementById("tbody").innerHTML = fila_producto.join('')
    }

    eliminar_producto(index){
        let productos = JSON.parse(localStorage.getItem("lista_productos"))
        productos.splice(index,1)

        localStorage.setItem("lista_productos", JSON.stringify(productos))
        this.tabla_producto()
    }

    actualizar_producto(index){
        let productos = JSON.parse(localStorage.getItem("lista_productos"))
        productos[index].nombre = document.getElementById("inp_nombre").value
        productos[index].precio = document.getElementById("inp_precio").value
        productos[index].imagen = document.getElementById("inp_imagen").value
        productos[index].detalle = document.getElementById("inp_detalle").value
        
        localStorage.setItem("lista_productos", JSON.stringify(productos))
        this.tabla_producto()

        document.getElementById("btn_actualizar").style.display = "none"
        document.getElementById("btn_guardar").style.display = "block"
        this.vaciar()
    }

    vaciar(){
        document.getElementById("form_cliente").reset()
    }


    
}