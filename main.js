const menuBtn = document.querySelector(".menu-btn");
const menuItem = document.querySelector(".menu-items");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItem.classList.toggle("open");
});


// Order Page

const checkBox = document.getElementsByClassName("checks")
const quantity = document.getElementsByClassName("quantities")

// console.log(quantity[1].value);
const price = document.getElementsByClassName("price")
  let rPrice = []
  for (let i = 0; i < price.length; i++) {
    rPrice.push(price[i].innerText.replace("#", ""));
  }
  console.log(rPrice);

const total = document.getElementById("total")
const purchase = document.getElementById("purchase");


// Checkbox
for (var i = 0; i < checkBox.length; i++){
  checkB = checkBox[i]
  checkB.addEventListener("change", checkthis)
}
function checkthis(){
  
  let sum = 0;
  for(let j =0; j< checkBox.length; j++){
  if (checkBox[j].checked) {
    console;
    sum += quantity[j].value * rPrice[j];
  } else {
    // quantity[j].value = 0;
    sum += 0;
    // console.log(rPrice);
  }
  console.log(sum)
  total.innerText = "#" + sum;
}
}





  // input
  for (var i = 0; i < quantity.length; i++) {
    var input = quantity[i];
    input.addEventListener("change", quantityChanged);
  }
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}