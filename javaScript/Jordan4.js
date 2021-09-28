let jordan4Container = document.getElementById("jordan4Container");
for (let i = 0; i < allShoes.length; i++) {
    if (allShoes[i].name == "Air Jordan 4") {
      
        jordan4Container.innerHTML += `<div class ="shoesCards">  
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
   
}
};
let addToCartBtn = document.getElementsByClassName("addToCartBtn");
let removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
let theCart = [];
let cartSum = 0;

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].onclick = function () {
    theCart.push(allShoes[i+22]);
    cartSum += allShoes[i+22].price;
    console.log(cartSum);
    console.log(theCart);
    alert(
      `${allShoes[i+22].name} - ${
        allShoes[i+22].details
      } Added to the Cart!`
    );
  };
}

for (let i = 0; i < removeFromCartBtn.length; i++) {
  removeFromCartBtn[i].onclick = () => {
    for (let j = 0; j < theCart.length; j++) {
      if (theCart[j] == allShoes[i+22]) {
        theCart.splice(j, 1);
        cartSum -= allShoes[i+22].price;
        alert(
          `${allShoes[i+22].name} - ${
            allShoes[i+22].details
          } Removed From the Cart!`
        );
      }
      console.log(theCart);
    }
  };
}