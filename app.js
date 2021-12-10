const input = document.querySelector("#input");
const checkBtn = document.querySelector("#check-btn");

const modal = document.querySelector("#myModal");
const theAnswer = document.querySelector(".theAnswer");
const closeBtn = document.querySelector(".close");

let answerOptions = ["Super, you are genius!", "Opps, try again "];

checkBtn.addEventListener("click", function () {
  modal.style.display = "block";
  let userInput = parseInt(input.value);

  if (userInput === 15) {
    modal.style.background = "rgb(46,204,114)";
    theAnswer.textContent = answerOptions[0];
  } else {
    modal.style.background = "rgb(231, 76, 60)";
    theAnswer.textContent = answerOptions[1];
  }
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
