export default class Pedidos{
    
    constructor(cliente){
        this.cantidad = 1
        this.contador = 0
        this.total = 0
        this.cliente = cliente
    }


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
          <p class="card-text">${element.detalle}
          <br>
         $${element.precio}
          </p>
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
            cantidad: this.cantidad,
            precio: pedido[index].precio
        }

        console.log(fila_pedido)
        
        if("lista_pedidos" in localStorage){

            let pedidos = JSON.parse(localStorage.getItem("lista_pedidos"))
            let i =  pedidos.map(function(e) { return e.nombre; }).indexOf(pedido[index].nombre);

            console.log(i)

            if(i >= 0){
                console.log('cantidad: '+pedidos[i].cantidad)
                
                pedidos[i].cantidad = pedidos[i].cantidad + 1
                pedidos[i].precio = parseInt(pedidos[i].precio) + parseInt(pedido[index].precio)
                localStorage.setItem("lista_pedidos",JSON.stringify(pedidos)) 
            }else{
                let pedidos = JSON.parse(localStorage.getItem("lista_pedidos"))
                pedidos.push(fila_pedido)
                localStorage.setItem("lista_pedidos",JSON.stringify(pedidos))
            }

            

           
    
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
        <td class="fw-semibold">${element.cantidad}</td>
        <td class="fw-semibold">${element.precio}</td>
        
         </tr>
    `
    fila_pedido.push(elemento_pedido)
    });
    
    document.getElementById("tbody").innerHTML = fila_pedido.join('')

   }

   finalizar_pedido(){
    let pedido_final = JSON.parse(localStorage.getItem("lista_pedidos")) 
        

     

      pedido_final.forEach(element => {
          
              this.contador= this.contador + 1;
                this.total = this.total + parseInt(element.precio)      
        
              
      });
      console.log(this.total)
      let nuevo_pedido = {
        fecha: Date(),
        cliente: this.cliente,
        total:this.total,
        estado: 0,
        detalle: pedido_final
    }
        console.log(nuevo_pedido)
         
        if("pedido_final" in localStorage){
            let pedido = JSON.parse(localStorage.getItem("pedido_final"))
            pedido.push(nuevo_pedido)
            localStorage.setItem("pedido_final",JSON.stringify(pedido))
    
        }else{
            let pedido = []
            pedido.push(nuevo_pedido)
            localStorage.setItem("pedido_final",JSON.stringify(pedido))
        }

        
        localStorage.removeItem("lista_pedidos")
        console("se borro lista_pedidos")
   }
}