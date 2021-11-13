
var allMusic = []

axios.get(`/music`)
  .then(function (response) {
    console.log(response.data);
    product = response.data;
    displayMusic();
  })
  .catch(function (error) {
    console.log(error);
  });

  function displayMusic (){
    for (let index = 0; index < product.length; index++) {
        if (product[index].categories === "music"){
            allMusic.push(product[index])
        }
    }
    
    var section_Container = document.getElementById("section_Container");
    
    for (let index = 0; index < allMusic.length; index++) {
        section_Container.innerHTML += ` 
        <div class="imageAndPara">
        <img class="image_movie" src="${allMusic[index].Images[0]}" alt="Movie poster">
        <p class="nameMovie">${allMusic[index].name}</P>
        <div class="containerBtn"><button class="btn">Add to cart</button> 
        <p class="movie_price"><span>$</span>${allMusic[index].price}</p></div>
        </div>`
    }
  }


var btn = document.getElementsByClassName("btn");
var cart = []

for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , function(){
        cart.push(allMusic[index]);
        console.log(cart);
    })
};




