export default class Cliente {

    constructor(nom,ape,dni){
        this.apellido = ape
        this.nombre = nom
        this.dni = dni
    }

    guardar_cliente(){
        //se crea un objeto
        let nuevo_cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
        }

        //se pregunta si existe la key en el LS, si no es asi se crea y se le da el primer "cliente"
        //si existe


        if("listado_cliente" in localStorage){
            //se trae get el listado de clientes y se parsea los datosque vienen en JSOn
            let lista_cliente = JSON.parse(localStorage.getItem("listado_cliente"))
            lista_cliente.push(nuevo_cliente)
            localStorage.setItem("listado_cliente",JSON.stringify(lista_cliente))
            
        }else{
           
            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)
            //crear el sector de almacenamiento
            //se mandan los datos del array lista_clientes en forma de JSON
            localStorage.setItem("listado_cliente",JSON.stringify(lista_clientes))
        }
        //se invoca el metodo obtener_cliente
        this.obtener_cliente()
    }

    obtener_cliente(){
        //se toman los tados del LS y se parsean
        let listado_cliente = JSON.parse(localStorage.getItem("listado_cliente")) 
        //lista dinamica
            let filas = []
            //se otma el indice de los elementos y se envian por medio del boton
        listado_cliente.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm" ><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')

    }

    eliminar_cliente(index){
        //se toma la lista y se elimina un cliente con splice 
        //el boton posicionado en cada tabla toma indice y asi se borra
        let lista_clientes = JSON.parse(localStorage.getItem("listado_cliente"))

        lista_clientes.splice(index,1)
        //se vuelve a guarda la tabla
        localStorage.setItem("listado_cliente", JSON.stringify(lista_clientes))
        //se refresca la tabla
        this.obtener_cliente()
    }

    actualizar_cliente (index){
        //se busca el listado de cliente en el LS
        let listado_clientes = JSON.parse(localStorage.getItem("listado_cliente"))
        //se modifica a cierto cliente(index)
        listado_clientes(index).nombre = document.getElementById("inp_nombre").value
        listado_clientes(index).apellido = document.getElementById("inp_apellido").value
        listado_clientes(index).dni = document.getElementById("inp_dni").value
        //se guarda
        localStorage.setItem("listado_cliente", JSON.stringify(listado_clientes))
        //se refresca la tabla llamando al metodo obtener cliente
        this.obtener_cliente()
    }
}

 
