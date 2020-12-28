const menuBtn = document.querySelector(".menu-btn");
const menuItem = document.querySelector(".menu-items")
menuBtn.addEventListener("click", ( ) => {
  menuBtn.classList.toggle("open");
  menuItem.classList.toggle("open");
})
