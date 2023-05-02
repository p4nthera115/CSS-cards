const first = document.querySelector(".card-group :nth-child(1)");
const second = document.querySelector(".card-group :nth-child(2)");
const third = document.querySelector(".card-group :nth-child(3)");
const fourth = document.querySelector(".card-group :nth-child(4)");

const clickCards = () => {
  first.style.transform = "translate(-300%, 10%)";
  second.style.transform = "translate(-133%, 10%)";
  third.style.transform = "translate(33%, 10%)";
  fourth.style.transform = "translate(200%, 10%)";
};

const closeCards = () => {
  first.style.transform = "";
  second.style.transform = "";
  third.style.transform = "";
  fourth.style.transform = "";
};
