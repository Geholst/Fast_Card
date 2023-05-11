// import { Flashcard } from "./Flashcard";
// const srs = require("./srs");
// const timer = require("./timer");
const timeLabel = document.getElementById("timer");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

class Flashcard {
  constructor(id, front, back, reviewDay, isStarted) {
    this.id = id;
    this.front = front;
    this.back = back;
    this.isStarted = isStarted;
    this.reviewDay = reviewDay;
  }
}

const ichi = new Flashcard(1, "ichi", "one");
ichi.reviewDay = "wednesday";
ichi.isStarted = true;

let intervalID;

function start(item = 0, element) {
  let count = 0;
  item = count;
  intervalID = setInterval(countUp, 1000);
  function countUp() {
    count++;
    element.innerHTML = count;
    // console.log("count: ", count);
  }
}
document.onload = start(0, timeLabel);
// console.log("ichi: ", ichi);
const flip = document.getElementById("flip");
flip.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(intervalID);
});
a.addEventListener("click", () => {
  clearInterval(intervalID);
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
