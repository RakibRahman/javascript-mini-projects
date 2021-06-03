const imgBox = document.querySelector(".siema");
const big = document.querySelector(".big");
imgBox.addEventListener("click", (e) => {
  big.innerHTML = `<img src="${e.target.src}" />`;
});
