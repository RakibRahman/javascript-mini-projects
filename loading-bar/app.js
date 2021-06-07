const loadingBar = document.querySelector(".loading-bar");
function loader() {
  //   setTimeout(() => {
  //     loadingBar.style.width = 20 + "%";
  //   }, 2000);
  //   setTimeout(() => {
  //     loadingBar.style.width = 50 + "%";
  //   }, 3000);
  //   setTimeout(() => {
  //     loadingBar.style.width = 80 + "%";
  //   }, 4000);
  //   setTimeout(() => {
  //     loadingBar.style.width = 100 + "%";
  //   }, 4500);
  let percentage = 1;
  let bar = setInterval(() => {
    if (percentage >= 100) {
      clearInterval(bar);
    } else {
      percentage++;
      loadingBar.style.width = percentage + "%";
    }
  }, 10);
}
loader();
