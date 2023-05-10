import flashcard from "./Flashcard";
// const srs = require("./srs");
// const timer = require("./timer");
const timeLabel = document.getElementById("timer");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

const ichi = new flashcard(1, "ichi", "one");
ichi.reviewDay = "wednesday";
ichi.isStarted = true;

console.log("ichi: ", ichi);

a.addEventListener("click", (event) => {
  console.log("clicked");
});
b.addEventListener("click", () => {
  alert("a");
});
c.addEventListener("click", () => {
  alert("a");
});
d.addEventListener("click", () => {
  alert("a");
});
