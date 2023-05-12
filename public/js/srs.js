// let Interval;

// Interval = async () => {
//   const interval = await fetch("js/review.js");
//   console.log("Intervals: ");
//   return interval;
// };
import { days, Interval } from "./interval.js";
// const timer = require("./timer");
const timeLabel = document.getElementById("timer");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const cardData = document.getElementById("card-data");
const flashcards = [];
let intervalID;
let currentIndex = 0;

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
  // testing if type="module" is working in front end
  // console.log("interval: " + Interval);
  srs();
  start(currentIndex, timeLabel, cardData, flashcards);
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

function start(currentIndex, timerElement, cardElement, flashcards) {
  let count = 0;
  // let items = flashcards.length;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timerElement.innerHTML = "Time: " + count;
    // this auto flips the card
    // cardElement.innerHTML = flashcards[currentIndex].front;

    // console.log("count: ", count);
  }
}

function next() {
  let count = 0;
  currentIndex++;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timeLabel.innerHTML = "Time: " + count;
    cardData.innerHTML = flashcards[currentIndex].front;
    // console.log("count: ", count);
  }
}
// console.log("ichi: ", ichi);
const flip = document.getElementById("flip");
flip.addEventListener("click", (event) => {
  event.preventDefault();
  const currentData = cardData.innerHTML;
  if (currentData === flashcards[currentIndex].front) {
    cardData.innerHTML = flashcards[currentIndex].back;
  } else {
    cardData.innerHTML = flashcards[currentIndex].front;
  }
  // clearInterval(intervalID);
});
a.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalA(flashcards[currentIndex]);
  next();
});
b.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalB(flashcards[currentIndex]);
  next();
});
c.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalC(flashcards[currentIndex]);
  next();
});
d.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalD(flashcards[currentIndex]);
  next();
});

// flashcards.forEach((flashcard) => {
//   flashcard.isStarted = true;
//   flashcard.reviewDay = dayLabel;

// });
