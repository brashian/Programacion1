

const catalogo_anime = async() => {

    let anime = await fetch('https://api.jikan.moe/v4/anime?q=Bleach&sfw')
    let anime_datos =  await anime.json()
    let anime_data = anime_datos.data

    let tarjetas = []
    anime_data.forEach(anime => {
        
    let card = `
    <div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${anime.images.webp.large_image_url}" class="card-img-top">
            <div class="card-body">
                <p class="card-text">${anime.title}</p>
            </div>
        </div>
    </div>
    `
    tarjetas.push(card)
    });

    document.getElementById('div_anime').innerHTML= tarjetas.join('')

}
catalogo_anime()

