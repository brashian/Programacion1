//crear array de arreglo

let vehiculos = [ 
    {
        marca:'Ford',
        modelo:'Focus',
        anio:2014,
        origin:'Mercosur',
    },
    {
        marca:'Volkswage',
        modelo:'Golf 1.4 TSI',
        anio:2014,
        origin:'Mexico',
    }
]
//recorrer un array de objetos
vehiculos.forEach( (element,index) => {
    console.log(index+'-'+element.modelo)
});

//funciones asincronas y concepto de Async y Await
//async para decir que es asincrona
const recorrer = async() => {
    //hace una peticion http a traves del metodo get
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
    //como demora quiero que espere para ejecutar lo demas (await)
    //await sin async no funciona

    //guardo de manera definitiva los datos en json
   const publicaciones = await respuesta.json()
   publicaciones.forEach(element => {
       console.log(element.title)
   });

}
const boton = document.getElementById('btn_solicitud')
boton.addEventListener("click",recorrer)