
var allallVideoGames = []

for (let index = 0; index < product.length; index++) {
    if (product[index].categories === "videoGames"){
        allallVideoGames.push(product[index])
    }
}

var section_Container = document.getElementById("section_Container");

for (let index = 0; index < allallVideoGames.length; index++) {
    section_Container.innerHTML += ` 
    <div class="imageAndPara">
    <img class="image_movie" src="${allallVideoGames[index].Images[0]}" alt="Movie poster">
    <p class="nameMovie">${allallVideoGames[index].name}</P>
    <div class="containerBtn"><button class="btn">Add to cart</button> 
    <p class="movie_price"><span>$</span>${allallVideoGames[index].price}</p></div>
    </div>`
}

var btn = document.getElementsByClassName("btn");
var cart = []

for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , function(){
        cart.push(allallVideoGames[index]);
        console.log(cart);
    })
};




