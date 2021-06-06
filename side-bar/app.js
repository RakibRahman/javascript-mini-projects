const menuBar = document.querySelector("#nav__mobile ul");
const burger = document.querySelector("#burger");

function humBurger() {
  if (menuBar.style.display === "none") {
    menuBar.style.display = "flex";
  } else {
    menuBar.style.display = "none";
  }
}
burger.addEventListener("click", humBurger);
