// import { Flashcard } from "./Flashcard";
// const srs = require("./srs");

const timeLabel = document.getElementById("timer");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

// const ichi = new flashcard(1, "ichi", "one");
// ichi.reviewDay = "wednesday";
// ichi.isStarted = true;

// console.log("ichi: ", ichi);
const flip = document.getElementById("flip");
flip.addEventListener("click", (event) => {
  event;
  timer.start();
  console.log("clicked ");
});
a.addEventListener("click", () => {
  alert("a");
});
b.addEventListener("click", () => {
  alert("b");
});
c.addEventListener("click", () => {
  alert("c");
});
d.addEventListener("click", () => {
  alert("d");
});
