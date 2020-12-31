const menuBtn = document.querySelector(".menu-btn");
const menuItem = document.querySelector(".menu-items");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItem.classList.toggle("open");
});





const checks = document.getElementsByClassName("checks");
// console.log(checks)

for (let i = 0; i < checks.length; i++) {
  let clicked = checks[i];
  clicked.addEventListener("change", checkthis);
}

function checkthis(event) {
  if (event.target.checked) {
    // let sum = 0;
    // console.log(price);
    const input = document.getElementsByClassName("quantities");
    // let price = document.getElementsByClassName("price");
    for (let i = 0; i < input.length; i++) {
      let quantity = input[i];
      quantity.addEventListener("change", dothis);
      // updateCartTotal();
    }
  } else {
    console.log("nO");
  }
  updateCartTotal();
}

// inputs

function dothis(event) {
  let input = event.target;
  let button = input.parentElement.parentElement;
  btn = button.getElementsByClassName("checks");
  // console.log(btn);
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  if (btn.checked) {
    console.log("Hello");
  }
  updateCartTotal();
  // console.log(btn)
  // else{
  //   input.value = input.value
  // }
}

function updateCartTotal() {
  const orderDiv = document.getElementsByClassName("order-options");
  sum = 0;
  const checks = document.getElementsByClassName("checks");
  // console.log(checks);
  for (let i = 0; i < orderDiv.length; i++) {
    btn = checks[i];
    if (btn.checked) {
      let price = document
        .getElementsByClassName("price")
        [i].innerHTML.replace("#", "");
      let quantity = document.getElementsByClassName("quantities")[i].value;
      sum += quantity * price;
    } else {
      sum += 0;
    }
  }
  // console.log(sum);
  document.getElementById("total").innerHTML = "#" + sum;
}
// btn = document.getElementsByClassName(checks);
// console.log(btn);
