const error = document.querySelector(".error");
const peopleimg = document.querySelector(".peopleimg");
const dollarimg = document.querySelector(".dollarimg");
const reset = document.querySelector(".reset");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

reset.addEventListener("click", (e) => {
  if (peopleimg.value === "" || peopleimg.value == 0) {
    peopleimg.style.borderColor = "red";
    error.classList.add("show");
  } else {
    peopleimg.style.borderColor = "";
    error.classList.remove("show");
  }
});
