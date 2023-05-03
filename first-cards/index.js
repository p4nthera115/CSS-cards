const cardsGroup = document.getElementsByClassName("card-group");

const first = document.querySelector(".card-group :nth-child(1)");
const second = document.querySelector(".card-group :nth-child(2)");
const third = document.querySelector(".card-group :nth-child(3)");
const fourth = document.querySelector(".card-group :nth-child(4)");

console.log(cardsGroup[0].attributes[2].value);

const clickCards = () => {
  if (cardsGroup[0].attributes[2].value === "inactive") {
    cardsGroup[0].attributes[2].value = "active";

    first.style = "transform: translate(-300%, 10%)";
    first.children[0].style =
      "opacity: 1; transition: opacity 0.3s ease-in-out;";

    second.style = "transform: translate(-133%, 10%)";
    second.children[0].style =
      "opacity: 1; transition: opacity 0.3s ease-in-out;";

    third.style = "transform: translate(33%, 10%)";
    third.children[0].style =
      "opacity: 1; transition: opacity 0.3s ease-in-out;";

    fourth.style = "transform: translate(200%, 10%)";
    fourth.children[0].style =
      "opacity: 1; transition: opacity 0.3s ease-in-out;";
  } else if (cardsGroup[0].attributes[2].value === "active") {
    cardsGroup[0].attributes[2].value = "inactive";

    first.style = "";
    first.children[0].style = "opacity: 0;";

    second.style = "";
    second.children[0].style = "opacity: 0;";

    third.style = "";
    third.children[0].style = "opacity: 0;";

    fourth.style = "";
    fourth.children[0].style = "opacity: 0;";
  }

  console.log(cardsGroup[0].attributes[2].value);
};

const playVid = (video) => {
  video.play();
};
const stopVid = (video) => {
  video.pause();
};
