
var allTvShows = []

for (let index = 0; index < product.length; index++) {
    if (product[index].categories === "tvShows"){
        allTvShows.push(product[index])
    }
}

var section_Container = document.getElementById("section_Container");

for (let index = 0; index < allTvShows.length; index++) {
    section_Container.innerHTML += ` 
    <div class="imageAndPara">
    <img class="image_movie" src="${allTvShows[index].Images[0]}" alt="Movie poster">
    <p class="nameMovie">${allTvShows[index].name}</P>
    <div class="containerBtn"><button class="btn">Add to cart</button> 
    <p class="movie_price"><span>$</span>${allTvShows[index].price}</p></div>
    </div>`
}

var btn = document.getElementsByClassName("btn");
var cart = []

for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , function(){
        cart.push(allTvShows[index]);
        console.log(cart);
    })
};




