var section_Container = document.getElementById("section_Container");

var allMovies = [];
let product;
 
axios.get(`/movies`)
  .then(function (response) {
    console.log(response.data);
    product = response.data;
    displayMovies();
  })
  .catch(function (error) {
    console.log(error);
  });


function displayMovies() {
  for (let index = 0; index < product.length; index++) {
    if (product[index].categories === "movie") {
      allMovies.push(product[index]);
    }
  }
  for (let index = 0; index < allMovies.length; index++) {
    section_Container.innerHTML += 
    `<div class="imageAndPara">
    <img class="image_movie" src="${allMovies[index].Images[0]}" alt="Movie poster">
    <p class="nameMovie">${allMovies[index].name}</P>
    <div class="containerBtn"><button class="btn" onClick="addToCart('${allMovies[index]._id}')">Add to cart</button> 
    <p class="movie_price"><span>$</span>${allMovies[index].price}</p><///>
    </div>`;
  }
}

var btn = document.getElementsByClassName("btn");
var cart = [];
function patchAddToCart(product){
  console.log(product);
  axios 
  .patch("/addToCart",product)
  .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{console.error(error);})
}

function addToCart(ID){
  axios
  .get(`/addToCart/${ID}`)
  .then((response)=>{
    if(response.status==200){
      console.log(response);
      patchAddToCart(response.data)
    }
  })
  .catch((err)=>{
    alert(err);
  })
  .then()
  }

 
// for (let index = 0; index < btn.length; index++) {
//   btn[index].addEventListener("click", function () {
//     cart.push(allMovies[index]);
//     console.log(cart);
//     localStorage.setItem('name','david');
//   });
// }

  const saveToLocalStorage = (index) => {
  const movieName = allMovies[index].name;
  const movieId = allMovies[index].id;
  localStorage.setItem(movieName, movieId );
}



