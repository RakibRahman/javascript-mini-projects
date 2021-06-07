const content = document.getElementsByClassName("content");

function toggleAccordion() {
  for (let item of content) {
    let question = item.firstElementChild;
    question.addEventListener("click", () => {
      let details = question.nextElementSibling;
      let icon = question.lastElementChild;
      details.classList.toggle("answerToggle");
      if (details.classList.contains("answerToggle")) {
        icon.innerText = "➕";
      } else {
        icon.innerText = "➖";
      }
    });
  }
}
toggleAccordion();
