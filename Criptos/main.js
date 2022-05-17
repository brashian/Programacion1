/*La consigna consiste en recorrer un JSON y crear  dinámicamente una tabla de Bootstrap, de manera de visualizar las principales criptos. Además deberán mostrar el logotipo de cada moneda y los siguiente campos (columnas) que se muestran a continuación:

image
name
symbol
current_price
price_change_percentage_24h
total_volume */
const cripto = async() => {

    let criptos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    let cripto_monedas =  await criptos.json()

    let contador = 0
    let elementos = []
    cripto_monedas.forEach(cripto => {
        contador=contador +1
    let tbl = `
    <tr>
        <th scope="row" class="table-warning" >${contador}</th>
        <td class="table-dark"><img src="${cripto.image}" class="img-fluid"></td>
        <td class="table-dark">${cripto.name}</td>
        <td class="table-dark">${cripto.symbol}</td>
        <td class="table-dark">${cripto.current_price}</td>
        <td class="table-dark">${cripto.price_change_percentage_24h}</td>
        <td class="table-dark">${cripto.total_volume}</td>
    </tr>
    `

    elementos.push(tbl)
    });
    document.getElementById('tbl_cripto').innerHTML= elementos.join('')

}
cripto()

