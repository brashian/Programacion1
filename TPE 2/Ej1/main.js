
//se crea una funcion asincrona, con un delay.
const dolar = async () => {

 //hago la peticion  de datos con fetch para traerlos y almacenarlos en datos
 //con una espera "await"
    const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    //parseo de datos como json
    const datosr = await datos.json()
    

    let elementos = []
    //se recorre datosr
    datosr.forEach((element,index) => {
        //se generan elementos de una tabla, que se adicionan al array elementos
        //se muestra indice y otras caracteristicas del json
        let col = `
        <tr class="table-light">
            <td class="table-dark">${index+1}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.agencia}</td>
            <td>${element.casa.venta}</td>
            <td>${element.casa.compra}</td>
        </tr>
        `
        //se añaden al array "antes vacio" elementos
        elementos.push(col)

    });
    //se borran las "" con join
    document.getElementById('t_body').innerHTML = elementos.join('')


}

dolar()