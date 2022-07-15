export default class Pedidos{
    contador = 0
    constructor(){}


    crear_tarjetas(){
        let productos = JSON.parse(localStorage.getItem("lista_productos")) 

        let tarjetas = []
        productos.forEach((element,index) => {
            
        let card = `
        <div class="col-md-3 mt-5" >

        
        <div class="card" style="width: 18rem;">
        <img src="${element.imagen}" class="card-img-top" style="height: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.detalle}</p>
          <button onclick="indice_pedido(${index})"  data-bs-toggle="modal" data-bs-target="#modal_pedido" class="btn btn-primary" >Agregar</button>
          


        </div>
      </div>

      </div>
        `
        tarjetas.push(card)
        });
    
        document.getElementById('tarjetas').innerHTML= tarjetas.join('')
    }
    
    agregar_pedido(index){
        let pedido = JSON.parse(localStorage.getItem("lista_productos")) 
        

        let fila_pedido = {
            nombre: pedido[index].nombre,
            cantindad: this.contador,
            precio: pedido[index].precio
        }

        
        
        if("lista_pedidos" in localStorage){
            let pedidos = JSON.parse(localStorage.getItem("lista_pedidos"))
            pedidos.push(fila_pedido)
            localStorage.setItem("lista_pedidos",JSON.stringify(pedidos))
    
        }else{
            let pedidos = []
            pedidos.push(fila_pedido)
            localStorage.setItem("lista_pedidos",JSON.stringify(pedidos))
        }

       
        this.tabla_pedidos()
    }

   tabla_pedidos(){
    let pedidos = JSON.parse(localStorage.getItem("lista_pedidos")) 
    let fila_pedido = []
    pedidos.forEach((element) => {
        let elemento_pedido=`
        <tr>
        
        <td class="fw-semibold">${element.nombre}</td>
        <td class="fw-semibold">$${element.cantidad}</td>
        <td class="fw-semibold">${element.precio}</td>
        
         </tr>
    `
    fila_pedido.push(elemento_pedido)
    });
    
    document.getElementById("tbody").innerHTML = fila_pedido.join('')

   }
}