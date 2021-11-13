let product ;

// var product = [
// ];

axios.get(`/cart`)
  .then(function (response) {
    console.log(response.data[0]);
    displayCart(response.data[0].products);
  })
  .catch(function (error) {
    console.log(error);
  });

var  tableCart = document.getElementById("tableCart");

function displayCart(Cartproduct){
    product = Cartproduct;
    for (let index = 0; index < product.length; index++) {
    tableCart.innerHTML += `<tr>
    <td>${product[index].categories}</td> 
    <td>${product[index].name}</td>
    <td>${product[index].Images}</td>
    <td>${product[index].price}</td>
    <td><button onclick="btnDelete('${product[index]._id}')" class="btnRemove">delete</button></td>
    </tr>`
}
}

// displayCart(Cartproduct)

function btnDelete(ID){
    axios
    .patch(`/deleteCartProduct/${ID}`)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
    .then()
}

var btnRemove = docum0ent.getElementsByClassName("btnRemove");

var th =
`<tr>
<th>category</th>
<th>name</th>
<th>price</th>
<th>remove</th>
</tr>`


// function btnDelet (productId){
//     for (let index = 0; index < mycart.length; index++) {
//         if (mycart[index].id === productId){
//             mycart.splice(index , 1)
//             console.log(mycart);
//             tableCart.innerHTML = th
//             displayCart()
//             totalFuncation()
//         }
//     }
// } 





var totalPrice =document.getElementById("totalPrice");


// function totalFuncation(){
//     var totalSum = 0
//     for (let index = 0; index < mycart.length; index++) {
//         totalSum = totalSum + mycart[index].price;
//     }
    
//     totalPrice.innerHTML= `total price: ${totalSum}`

// }

// totalFuncation()



// const getDataFromLocalStorage = () => {
//     const movieName = localStorage.getItem(movieName);
//     console.log(movieName);
// }

// getDataFromLocalStorage();
