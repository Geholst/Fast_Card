import { days, Interval } from "./interval.js";
import { Flashcard } from "./Flashcard.js";
const timeLabel = document.getElementById("time-label");
const deckName = document.getElementById("deck-name");
const trackerContainer = document.getElementById("tracker-container");
const intervalButtons = document.getElementById("interval-buttons");
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
let intervalID;
let currentIndex = 0;
let started = false;
let finished = false;

function startTracker() {
  const trackerBody = document.createElement("div");
  trackerBody.setAttribute("id", "tracker-body");
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
}

const go = (document.onload = () => {
  // testing if type="module" is working in front end
  // console.log("interval: " + Interval);
  a.disabled = true;
  b.disabled = true;
  c.disabled = true;
  d.disabled = true;
  getSampleData();
  flip.innerHTML = "Start";
});

go();

function getSampleData() {
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
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    timeLabel.innerHTML = "Time: " + count;
    flip.innerHTML = "flip";
    //this auto flips the card
    // cardElement.innerHTML = flashcards[currentIndex].front;
  }
}

function next() {
  let count = 0;
  const total = flashcards.length;
  if (currentIndex < total) {
    currentIndex++;
    deckName.innerHTML = flashcards[currentIndex].name;
    cardData.innerHTML = flashcards[currentIndex].front;
    // console.log("currentIndex: ", currentIndex);
    // console.log("total: ", total);
    intervalID = setInterval(countUp, 1000);
    function countUp() {
      count++;
      timeLabel.innerHTML = "Time: " + count;
    }
  } else {
    clearInterval(intervalID);
    console.log("finished");
    finished = true;
    cardData.innerHTML = "Finished";
  }
}

flip.addEventListener("click", (event) => {
  if (!started) {
    a.disabled = false;
    b.disabled = false;
    c.disabled = false;
    d.disabled = false;
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

a.addEventListener("click", (event) => {
  event.preventDefault();
  timeLabel.innerHTML = "Time: 0";
  clearInterval(intervalID);
  // scores[`monthly`];
  if (currentIndex === flashcards.length - 1) {
    finished = true;
    flashcards[currentIndex].front = "Finished";
    flashcards[currentIndex].back = "Yup Still Done";
    return (trackerContainer.innerHTML = `Monthly: ${scores[0]}  
      Weekly: ${scores[1]}  
      Alternate Days: ${scores[2]}  
      Daily: ${scores[3]}`);
  }
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

b.addEventListener("click", (event) => {
  timeLabel.innerHTML = "Time: 0";
  event.preventDefault();
  clearInterval(intervalID);
  if (currentIndex === flashcards.length - 1) {
    finished = true;
    flashcards[currentIndex].front = "Finished";
    flashcards[currentIndex].back = "Yup Still Done";
    return (trackerContainer.innerHTML = `Monthly: ${scores[0]}  
      Weekly: ${scores[1]}  
      Alternate Days: ${scores[2]}  
      Daily: ${scores[3]}`);
  }
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

c.addEventListener("click", (event) => {
  timeLabel.innerHTML = "Time: 0";
  event.preventDefault();
  clearInterval(intervalID);
  if (currentIndex === flashcards.length - 1) {
    finished = true;
    flashcards[currentIndex].front = "Finished";
    flashcards[currentIndex].back = "Yup Still Done";
    return (trackerContainer.innerHTML = `Monthly: ${scores[0]}  
      Weekly: ${scores[1]}  
      Alternate Days: ${scores[2]}  
      Daily: ${scores[3]}`);
  }
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

d.addEventListener("click", (event) => {
  timeLabel.innerHTML = "Time: 0";
  event.preventDefault();
  clearInterval(intervalID);
  if (currentIndex === flashcards.length - 1) {
    finished = true;
    flashcards[currentIndex].front = "Finished";
    flashcards[currentIndex].back = "Yup Still Done";
    return (trackerContainer.innerHTML = `Monthly: ${scores[0]}  
      Weekly: ${scores[1]}  
      Alternate Days: ${scores[2]}  
      Daily: ${scores[3]}`);
  }
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

document.addEventListener("click", (event) => {
  // event.preventDefault();
  if (finished) {
    const aStats = scores[0];
    const bStats = scores[1];
    const cStats = scores[2];
    const dStats = scores[3];
    const total = aStats + bStats + cStats + dStats;
    const aPercent = Math.round((aStats / total) * 100);
    const bPercent = Math.round((bStats / total) * 100);
    const cPercent = Math.round((cStats / total) * 100);
    const dPercent = Math.round((dStats / total) * 100);
    const totalPercent = total / flashcards.length;
    // cardData.innerHTML = "Accuracy: " + totalPercent + "%";
    cardData.innerHTML =
      `Monthly: ${aPercent}%` +
      `<br>` +
      `Weekly: ${bPercent}%` +
      `<br>` +
      `Alternate Days: ${cPercent}%` +
      `<br>` +
      `Daily: ${dPercent}%`;
    cardData.style.fontSize = "18px";
  }
});
