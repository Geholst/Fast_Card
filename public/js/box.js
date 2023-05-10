const dayjs = require("dayjs");

class Box {
  constructor(flashcards, reviewDay) {
    this.today = dayjs().format("dddd").toLocaleLowerCase();
    this.flashcards = flashcards;
    this.reviewDay = reviewDay.toLocaleLowerCase();
  }
}

// const box = new Box(["ichi", "ni", "san"], "saturday");

// console.log("Today: ", box.flashcards);
