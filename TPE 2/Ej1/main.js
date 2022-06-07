

const dolar = async () => {


    const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const datosr = await datos.json()
    

    let elementos = []
    datosr.forEach((element,index) => {
        
        let col = `
        <tr>
            <td>${index}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.agencia}</td>
            <td>${element.casa.venta}</td>
            <td>${element.casa.compra}</td>
        </tr>
        `

        elementos.push(col)

    });

    document.getElementById('t_body').innerHTML = elementos.join('')


}

dolar()