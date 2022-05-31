export default class Batman{
    
    

constructor(){}

async crear_catalogo (){

     const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
     const datos_reales =  await datos.json()
     const pelis  =  datos_reales.Search

    let  peliculas = []
    pelis.forEach(element => {
        
        switch (element.Title) {
            case "Batman":
            var trailer = "https://www.youtube.com/watch?v=ik7xfWne0g8"
              break;
            case "The Dark Knight":
            trailer = "https://www.youtube.com/watch?v=EXeTwQWrcwY"
              break;
            case "Batman v Superman: Dawn of Justice":
              trailer = "https://www.youtube.com/watch?v=0WWzgGyAH6Y"
              break;
            case "The Dark Knight Rises":
              trailer = "https://www.youtube.com/watch?v=g8evyE9TuYk"
              break;
            case "Batman Begins":
              trailer = "https://www.youtube.com/watch?v=neY2xVmOfUM"
              break;
              case "The LEGO Batman Movie":
              trailer = "https://www.youtube.com/watch?v=h6DOpfJzmo0"
              break;
              case "Batman Forever":
              trailer = "https://www.youtube.com/watch?v=ROLvjRB4E_Q"
              break;
              case "Batman & Robin":
              trailer = "https://www.youtube.com/watch?v=4RBXypX4qWI"
              break;
              case "Batman Returns":
              trailer = "https://www.youtube.com/watch?v=Too3qgNaYBE"
              break;
            default:
              console.log("Trailer no encontrado");
              break;
          }


        let col = `
        <div class="col-md-4 mt-5">
            <div class="card shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;">
            <img src="${element.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text text-center fw-bold">${element.Title}</p>
                
            </div>
            <a href="${trailer}" class="btn btn-primary">Trailer</a>
        </div> 
         
        </div>

        `
        peliculas.push(col)
    });
            
       
        

    document.getElementById('catalogo').innerHTML= peliculas.join('')



}
}
