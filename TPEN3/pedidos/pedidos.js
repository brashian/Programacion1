export default class Pedidos{
    contador;
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
          <button onclick="indice_pedido(${index})" class="btn btn-primary" id="btn_agregar">Agregar</button>
          


        </div>
      </div>

      </div>
        `
        tarjetas.push(card)
        });
    
        document.getElementById('tarjetas').innerHTML= tarjetas.join('')
    }

   tabla_pedidos(index){
    let pedido = JSON.parse(localStorage.getItem("lista_productos")) 
    let fila_pedido = {
        nombre: pedido[index].nombre,
        cantindad: this.contador,
        precio: pedido[index].precio
    }
    
    if("lista_pedidos" in localStorage){
        let pedidos = JSON.parse(localStorage.getItem("lista_pedidos"))
        productos.push(fila_pedido)
        localStorage.setItem("lista_pedidos",JSON.stringify(pedidos))

    }else{
        let pedidos = []
        productos.push(fila_pedido)
        localStorage.setItem("lista_pedidos",JSON.stringify(pedidos))
    }

    
   }

   encargos(){


   }
}