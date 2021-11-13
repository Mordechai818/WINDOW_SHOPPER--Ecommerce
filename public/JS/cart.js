let product ;

// var product = [
// ];

axios.get(`/cart`)
  .then(function (response) {
    console.log(response.data);
    product = response.data;
    displayCart();
  })
  .catch(function (error) {
    console.log(error);
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



var btnRemove = document.getElementsByClassName("btnRemove");

var th =
`<tr>
<th>category</th>
<th>name</th>
<th>price</th>
<th>remove</th>
</tr>`

console.log(mycart);

function btnDelet (productId){
    for (let index = 0; index < mycart.length; index++) {
        if (mycart[index].id === productId){
            mycart.splice(index , 1)
            console.log(mycart);
            tableCart.innerHTML = th
            displayCart()
            totalFuncation()
        }
    }
} 





var totalPrice =document.getElementById("totalPrice");


function totalFuncation(){
    var totalSum = 0
    for (let index = 0; index < mycart.length; index++) {
        totalSum = totalSum + mycart[index].price;
    }
    
    totalPrice.innerHTML= `total price: ${totalSum}`

}

totalFuncation()



const getDataFromLocalStorage = () => {
    const movieName = localStorage.getItem(movieName);
    console.log(movieName);
}

getDataFromLocalStorage();
