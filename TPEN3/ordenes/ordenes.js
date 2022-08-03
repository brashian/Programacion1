export default class Ordenes{
    constructor(){}

    
   estado_pedidos(){
    let pedidos = JSON.parse(localStorage.getItem("pedido_final")) 
   
    let orden = []

    pedidos.forEach((element,index) => {


        let elemento_pedido=`
        <tr>
        
        <td class="fw-semibold">${element.cliente}</td>
        <td class="fw-semibold">${element.fecha}</td>
        <td class="fw-semibold">${element.total}</td>
        <td class="fw-semibold">${element.estado}</td>
        <td class="fw-semibold">
        <button onclick="ordenes(${index})" data-bs-toggle="modal" data-bs-target="#modal_ordenes" class="btn btn-secondary btn-md" ><i class="fa fa-edit"></i></button>
        <button onclick="ver_detalle(${index})" data-bs-toggle="modal" data-bs-target="#modal_detalles" class="btn btn-secondary btn-md" ><i class="fa fa-eye"></i></button></td>
        
         </tr>
    `
    orden.push(elemento_pedido)
    });
    document.getElementById("table_body").innerHTML = orden.join('')

   }

   actualizar_orden(index){
    
    let ordenes = JSON.parse(localStorage.getItem("pedido_final")) 
    console.log(ordenes[index].estado)
    if(ordenes[index].estado == 0){
        ordenes[index].estado = 1
        localStorage.setItem("pedido_final",JSON.stringify(ordenes)) 
    }else{
        ordenes[index].estado = 0
        localStorage.setItem("pedido_final",JSON.stringify(ordenes)) 
    }
    this.estado_pedidos()
   }
   
}