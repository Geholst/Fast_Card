const flashcard = require("./Flashcard");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

const ichi = new flashcard(1, "ichi", "one");
ichi.reviewDay = "wednesday";
ichi.isStarted = true;

console.log("ichi: ", ichi);

a.addEventListener("click", () => {
    
 });