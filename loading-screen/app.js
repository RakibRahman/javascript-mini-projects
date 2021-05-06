const loadingScreen = document.querySelector(".loading");
const loadingTitle = loadingScreen.querySelector(".loading-title");

const loadingSpan = loadingTitle.querySelectorAll(".logo");

function screenLoad() {
  setTimeout(() => {
    loadingSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });
    setTimeout(() => {
      loadingSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      loadingScreen.style.top = "-100vh";
    }, 2300);
  });
}

window.addEventListener("DOMContentLoaded", screenLoad);
