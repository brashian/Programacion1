const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    },
}

const mostrar = () => {
    //se hacen constante para titulo,nombre,etc con destructuring object
    const {titulo, nombre} = framework
    const { lenguaje, patron, spa} = framework.características;
    //se hace uso de lo anterior imprimiendo los datos en un parrafo
document.getElementById('parrafo').innerHTML=`
    Titulo: ${titulo}
    <br>
    Nombre: ${nombre}
    <br>
    Lenguaje: ${lenguaje}
    <br>
    Patron: ${patron}
    <br>
    Spa: ${spa}


`


}
document.getElementById('btn_mostrar').addEventListener("click",mostrar)