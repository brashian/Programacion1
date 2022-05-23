const productos = async (cat)=>{

    const producto = await fetch ('https://fakestoreapi.com/products/category/'+cat)
    const productos_final = await producto.json()

    let article = []
    productos_final.forEach(articulos => {

        let col = `
        <div class="col-md-4 mt-5">
                <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4 p-2">
            <img src="${articulos.image}" class="img-fluid rounded-start" style="height: 200px;width: 200px" >
            </div>
            <div class="col-md-8">
            <div class="card-body" style="height: 18rem;width: 18rem">
                <h5 class="card-title">${articulos.title}</h5>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Description
                </a>
                </p>
                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                ${articulos.description}
                </div>
                </div>



                <p class="card-text"><small class="text-muted">Price $${articulos.price}</small></p>
            </div>
            </div>
        </div>
        </div>
        </div>
        
        `
        article.push(col)
    });

    document.getElementById('div_joyeria').innerHTML= article.join('')


}
productos()
