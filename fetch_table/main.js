const consumir_datos = async() =>{

    const datos_recibidos = await fetch ('https://jsonplaceholder.typicode.com/users')
    const datos = await datos_recibidos.json()


    let lista_usuarios = []
    var contador = 0;
    datos.forEach(usuarios => {
        
        contador= contador+1
        let fila = `<tr>
                        <th>${contador}</th>
                        <td >${usuarios.name}</td>
                        <td>${usuarios.email}</td>
                        <td>${usuarios.website}</td>
                    </tr>`
       
        lista_usuarios.push(fila)
        contador
    });

    document.getElementById('tbl_body').innerHTML=lista_usuarios.join('')
} 

consumir_datos()