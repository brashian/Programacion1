function ordenes(index){

    localStorage.setItem("indice_ordenes",index)
}

function ver_detalle(i){

    let pf = JSON.parse( localStorage.getItem("pedido_final"))
 
    let detalle = pf[i].detalle
    console.log(detalle)
    let objetos = []
    detalle.forEach(element => {
        let item = `
        <tr>
        
        <td class="fw-semibold">${element.nombre}</td>
        <td class="fw-semibold">${element.cantidad}</td>
        <td class="fw-semibold">${element.precio}</td>
        
         </tr>
        `
        objetos.push(item)
    });
    document.getElementById("table_detalle").innerHTML = objetos.join('')
 }