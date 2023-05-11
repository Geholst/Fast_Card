// const timer = require("./timer");
const timeLabel = document.getElementById("timer");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const cardData = document.getElementById("card-data");
const flashcards = [];
let intervalID;

class Flashcard {
  constructor(name, front, back, reviewDay, isStarted, tag) {
    this.name = name;
    this.front = front;
    this.back = back;
    this.isStarted = isStarted;
    this.reviewDay = reviewDay;
    this.tag = tag;
  }
}

const go = (document.onload = () => {
  srs();
  start(0, timeLabel, cardData);
});

go();

function srs() {
  fetch("db/hiragana.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log("data", data);
      data.forEach((card) => {
        let flashcard = new Flashcard(
          card.name,
          card.front,
          card.back,
          card.reviewDay,
          card.isStarted,
          card.tag
        );
        flashcards.push(flashcard);
        console.log("card front: ", card.front);
      });
    });
}

function start(item = 0, timerElement, cardElement, flashcards) {
  let count = 0;
  let items = flashcards.length;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timerElement.innerHTML = "Time: " + count;
    cardElement.innerHTML = flashcards[item].front;
    // console.log("count: ", count);
  }
}

function next() {
  let currentCard = flashcards[0];
  cardData.innerHTML = currentCard.front;
}
// console.log("ichi: ", ichi);
const flip = document.getElementById("flip");
flip.addEventListener("click", (event) => {
  event.preventDefault();
  const currentData = cardData.innerHTML;
  if (currentData === flashcards.front) {
    cardData.innerHTML = ichi.back;
  } else {
    cardData.innerHTML = ichi.front;
  }
  // clearInterval(intervalID);
});
a.addEventListener("click", () => {
  clearInterval(intervalID);
  next();
});
b.addEventListener("click", () => {
  clearInterval(intervalID);
});
c.addEventListener("click", () => {
  clearInterval(intervalID);
});
d.addEventListener("click", () => {
  clearInterval(intervalID);
});

// flashcards.forEach((flashcard) => {
//   flashcard.isStarted = true;
//   flashcard.reviewDay = dayLabel;

// });
