const theCart = [];
let theTable = document.getElementById("theTable");
let cartArray = [allShoes[21],allShoes[56],allShoes[15]];
theTable.innerHTML = `
<table>
<tr>

<th>Shoes you Added</th>
<th>Details</th>
<th>Price</th>

</tr>


<tr id="theTr">
<td><img  width = "150px"; height = "100px"; src = ${allShoes[21].imgs[0]}/></td>
<td>${allShoes[21].details}</td>
<td>${allShoes[21].price}$     <button id ="cartRemoveBtn">Remove</button></td>
</tr>

<tr id="theTr2">

<td><img width = "150px"; height = "100px"; src = ${allShoes[56].imgs[0]}/></td>
<td>${allShoes[56].details}</td>
<td>${allShoes[56].price}$    <button id ="cartRemoveBtn2">Remove</button></td>

</tr>

<tr id="theTr3">

<td><img width = "150px"; height = "100px"; src = ${allShoes[15].imgs[1]}/></td>
<td>${allShoes[15].details}</td>
<td>${allShoes[15].price}$         <button id ="cartRemoveBtn3">Remove</button>
</td>

</tr>



</table>

`
theTr = document.getElementById("theTr")
let cartRemoveBtn = document.getElementById("cartRemoveBtn")
let cartRemoveBtn1 = document.getElementById("cartRemoveBtn1")
let cartRemoveBtn2 = document.getElementById("cartRemoveBtn2")


let totalPrice = document.getElementById("totalPrice");
let priceCounter = 0;
// totalPrice.innerHTML=`${parseInt(allShoes[15].price)+parseInt(allShoes[56].price)+parseInt(allShoes[21].price)}`;
cartRemoveBtn.onclick =function (){
alert("Deleted the Item from Cart")
theTr.style.display="none";
totalPrice.innerText = 5567
}

cartRemoveBtn2.onclick =function (){
    alert("Deleted the Item from Cart")
    theTr2.style.display="none";
    totalPrice.innerText = 567
    }

    cartRemoveBtn3.onclick =function (){
        alert("Deleted the Item from Cart")
        theTr3.style.display="none";
        totalPrice.innerText = 0
        }
        
