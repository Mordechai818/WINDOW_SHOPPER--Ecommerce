const url = "http://localhost:5000/movies/";

const inputMediaName = document.getElementById("mediaName").value;
const inputObjectPrice = document.getElementById("objectprice").value;
const inputObjectDescription = document.getElementById("objectDescription").value;
const inputImagesLink = document.getElementById("imagesLink").value;
const inputMediaType = document.getElementById("mediaType").value;

document.getElementById("mediaForm").addEventListener("submit", (e) => {
  e.preventDefault;

  axios.post("/addProduct", inputMediaName, inputObjectPrice,
   inputObjectDescription, inputImagesLink, inputMediaType).then()
});


var  tableCart = document.getElementById("tableCart");

function displayCart(){
   for (let index = 0; index < product.length; index++) {
    tableCart.innerHTML += `<tr>
    <td>${product[index].categories}</td> 
    <td>${product[index].name}</td>
    <td>${product[index].Images}</td>
    <td>${product[index].price}</td>
    <td><button onclick="btnDelet(${mycart[index].id})" class="btnRemove">delete</button></td>
    </tr>`
}
}

displayCart()

