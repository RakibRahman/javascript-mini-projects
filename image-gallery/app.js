const container = document.getElementById("container");
const panels = container.querySelectorAll(".panel");
function gallery(e) {
  if (e.target.classList.contains("panel")) {
    removeClass();
    e.target.classList.toggle("active");
  }
}
function removeClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

container.addEventListener("click", gallery);
