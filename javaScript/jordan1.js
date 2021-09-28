let jordan1 = document.getElementById("jordan1")
for (let i = 0; i < allShoes.length; i++) {
    if (allShoes[i].name == "Air Jordan 1") {
      
        jordan1.innerHTML += `<div class ="shoesCards">  
        <h3>"${allShoes[i].details}"</h3>
        <h4>${allShoes[i].category}</h4>
        <h5>${allShoes[i].price}$</h5>
         <img src =${allShoes[i].imgs[0]} width = "300px" height = "260px">
         <img class="theSecPic" src =${allShoes[i].imgs[1]} width = "300px" height = "260px">


        <div class="cardBtns">
        <button class="addToCartBtn">Add To Cart</button>
        <button class="removeFromCartBtn">Remove From Cart</button>
     </div>
     </div>
        `


// }

  // }
}
};
let addToCartBtn = document.getElementsByClassName("addToCartBtn");
let removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
let theCart = [];
let cartSum = 0;

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].onclick = function () {
    theCart.push(allShoes[i]);
    cartSum += allShoes[i].price;
    console.log(cartSum);
    console.log(theCart);
    alert(
      `${allShoes[i].name} - ${
        allShoes[i].details
      } Added to the Cart!`
    );
  };
}
for (let i = 0; i < removeFromCartBtn.length; i++) {
  removeFromCartBtn[i].onclick = () => {
    for (let i = 0; i < allShoes.length; i++) {
  
// console.log(theCart)
// if (allShoes[i].id =! theCart[i].id){
//   alert("No such item in the Cart");
//   break;
// }
  
}
    for (let j = 0; j < theCart.length; j++) {
      if (theCart[j] == allShoes[i]) {
        theCart.splice(j, 1);
        cartSum -= allShoes[i].price
        console.log(cartSum);
        alert(
          `${allShoes[i].name} - ${
            allShoes[i].details
          } Removed From Cart!`
        );

      }
      console.log(theCart);
    }
  };
}

