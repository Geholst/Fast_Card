// let Interval;

// Interval = async () => {
//   const interval = await fetch("js/review.js");
//   console.log("Intervals: ");
//   return interval;
// };
import { days, Interval } from "./interval.js";
// import { startTracker } from "../util/tracker.js";
// import timer from "./timer.js";
// const timer = require("./timer");
const timeLabel = document.getElementById("time-label");
const deckName = document.getElementById("deck-name");
const trackerContainer = document.getElementById("tracker-container");
const intervalButtons = document.getElementById("interval-buttons");
const trackerBody = document.getElementById("tracker-body");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const cardData = document.getElementById("card-data");
const flip = document.getElementById("flip");
const flashcards = [];
let daily = 0;
let alternateDay = 0;
let weekly = 0;
let monthly = 0;
let scores = [monthly, alternateDay, weekly, daily];
console.log("scores: ", scores[`Monthly`]);

let intervalID;
let currentIndex = 0;
let started = false;
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

function startTracker() {
  const trackerBody = document.createElement("div");
  trackerBody.setAttribute("id", "tracker-body");
  console.log("trackerContainer: ", typeof trackerContainer);
  trackerContainer.appendChild(trackerBody);
  trackerContainer.innerHTML =
    "Monthly: " +
    scores[0] +
    "  Weekly: " +
    scores[1] +
    "  Alternate Days: " +
    scores[2] +
    "  Daily:" +
    scores[3];

  // trackerContainer.appendChild(tracker);
}

const go = (document.onload = () => {
  // testing if type="module" is working in front end
  // console.log("interval: " + Interval);
  srs();
  flip.innerHTML = "Start";
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
        // console.log("card front: ", " ", card.name, card.front);
      });
    });
}

function start() {
  let count = 0;
  startTracker(intervalButtons);
  // deckName.innerHTML = flashcards[currentIndex].name;
  // cardElement.innerHTML = flashcards[currentIndex].front;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timeLabel.innerHTML = "Time: " + count;
    flip.innerHTML = "flip";
    //this auto flips the card
    // console.log("count: ", count);
  }
}
// cardElement.innerHTML = flashcards[currentIndex].front;

function next() {
  let count = 0;
  currentIndex++;
  deckName.innerHTML = flashcards[currentIndex].name;
  cardData.innerHTML = flashcards[currentIndex].front;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timeLabel.innerHTML = "Time: " + count;

    // console.log("count: ", count);
  }
}
// console.log("ichi: ", ichi);
flip.addEventListener("click", (event) => {
  if (!started) {
    start();
    deckName.innerHTML = flashcards[currentIndex].name;
    flip.innerHTML = "flip";
    started = true;
  }
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
  // scores[`monthly`];
  Interval.intervalA(flashcards[currentIndex]);
  trackerContainer.innerHTML =
    "Monthly: " +
    ++scores[0] +
    "  Weekly: " +
    scores[1] +
    "  Alternate Days: " +
    scores[2] +
    "  Daily:" +
    scores[3];
  next();
});
b.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalB(flashcards[currentIndex]);
  trackerContainer.innerHTML =
    "Monthly: " +
    scores[0] +
    "  Weekly: " +
    ++scores[1] +
    "  Alternate Days: " +
    scores[2] +
    "  Daily:" +
    scores[3];
  next();
});
c.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalC(flashcards[currentIndex]);
  trackerContainer.innerHTML =
    "Monthly: " +
    scores[0] +
    "  Weekly: " +
    scores[1] +
    "  Alternate Days: " +
    ++scores[2] +
    "  Daily:" +
    scores[3];
  next();
});
d.addEventListener("click", () => {
  clearInterval(intervalID);
  Interval.intervalD(flashcards[currentIndex]);
  trackerContainer.innerHTML =
    "Monthly: " +
    scores[0] +
    "  Weekly: " +
    scores[1] +
    "  Alternate Days: " +
    scores[2] +
    "  Daily:" +
    ++scores[3];
  next();
});

// flashcards.forEach((flashcard) => {
//   flashcard.isStarted = true;
//   flashcard.reviewDay = dayLabel;

// });
