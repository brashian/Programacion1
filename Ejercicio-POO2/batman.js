export default class Batman{
    
    

constructor(){}

async crear_catalogo (){

     const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
     const datos_reales =  await datos.json()
     const pelis  =  datos_reales.Search

    let  peliculas = []
    pelis.forEach(element => {
        let col = `
        <div class="col-md-4 mt-5">
            <div class="card" style="width: 18rem;">
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${element.Title}</p>
            </div>
        </div>  
        </div>

        `
        peliculas.push(col)
    });
            
       
        

    document.getElementById('catalogo').innerHTML= peliculas.join('')



}
}
