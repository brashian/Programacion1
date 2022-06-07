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
    const {titulo, nombre} = framework
    const { lenguaje, patron, spa} = framework.características;
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