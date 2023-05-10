const dayjs = require("dayjs");
class Interval {
  static intervalA(flashcard) {
    const day = dayjs().add(5, "day").format("dddd").toLocaleLowerCase();
    return (flashcard.reviewDay = day);
  }

  static intervalB(flashcard) {
    const day = dayjs().add(3, "day").format("dddd").toLocaleLowerCase();
    return (flashcard.reviewDay = day);
  }

  static intervalC(flashcard) {
    const day = dayjs().add(2, "day").format("dddd").toLocaleLowerCase();
    return (flashcard.reviewDay = day);
  }

  static intervalD(flashcard) {
    const day = dayjs().add(1, "day").format("dddd").toLocaleLowerCase();
    return (flashcard.reviewDay = day);
  }
}

module.exports = Interval;
// const flashcard = {
//   id: 1,
//   reviewDay: null,
// };

// console.log("Review.js", "\n", Review.intervalA(flashcard));

// console.log("Did it change? ", flashcard.reviewDay);

// console.log(
//   "Update DB Item with ID flashcard.id with flashcard.reviewDay: ",
//   flashcard.id + " " + flashcard.reviewDay
// );
