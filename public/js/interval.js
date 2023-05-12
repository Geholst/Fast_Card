//TODO: A= Monthly, B=Weekly, C=Alternate Days, D=Daily

export const days = [
  null,
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export class Interval {
  static intervalA(flashcard) {
    // const day = dayjs().add(5, "day").format("dddd").toLocaleLowerCase();
    const date = new Date();
    const day = new Date(date);
    day.setDate(day.getDate() + 30);
    const newDay = days[day.getDay()];
    console.log("Next Review Date: ", day, "\n", "Day: ", newDay);

    return (flashcard.reviewDay = day);
  }

  static intervalB(flashcard) {
    const date = new Date();
    const day = new Date(date);
    day.setDate(day.getDate() + 7);
    const newDay = days[day.getDay() + 1];
    console.log("Next Review Date: ", day, "\n", "Day: ", newDay);
    return (flashcard.reviewDay = day);
  }

  static intervalC(flashcard) {
    const date = new Date();
    const day = new Date(date);
    day.setDate(day.getDate() + 2);
    const newDay = days[day.getDay()];
    console.log("Next Review Date: ", day, "\n", "Day: ", newDay);
    return (flashcard.reviewDay = day);
  }

  static intervalD(flashcard) {
    const date = new Date();
    const day = new Date(date);
    day.setDate(day.getDate() + 1);
    const newDay = days[day.getDay()];
    console.log("Next Review Date: ", day, "\n", "Day: ", newDay);
    return (flashcard.reviewDay = day);
  }
}
