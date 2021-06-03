const imgBox = document.querySelector(".siema");
const zoom = document.querySelector(".zoom");
imgBox.addEventListener("click", (e) => {
  zoom.innerHTML = `<img src="${e.target.src}" />`;
  console.log(e.target.nodeName);
});
