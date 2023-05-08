/**
 *
 *  Spaced Repetition System
 */
const dayjs = require("dayjs");

class SRS {
  constructor(
    deck,
    startDay = dayjs().format("dddd"),
    startDate = dayjs().format("MM/DD/YYYY")
  ) {
    this.startDay = startDay;
    this.startDate = startDate;
    this.today = dayjs().format("dddd").toLocaleLowerCase();
    this.endDate = dayjs(startDate).add(7, "day").format("MM/DD/YYYY");
    this.deck = deck;
    this.box = {
      monday: ["monday cards"],
      tuesday: ["tuesday cards"],
      wednesday: ["wednesday cards"],
      thursday: ["thursday cards"],
      friday: ["friday cards"],
      sunday: ["saturday cards"],
      saturday: ["sunday cards"],
    };
  }
  intervalA() {
    // I KNOW
    const day = dayjs().add(5, "day").format("dddd").toLocaleLowerCase();
    return day;
  }
  intervalB() {
    // I FORGOT
    const day = dayjs().add(3, "day").format("dddd").toLocaleLowerCase();
    return day;
  }
  intervalC() {
    // I COMPLETELY FORGOT
    const day = dayjs().add(2, "day").format("dddd").toLocaleLowerCase();
    return day;
  }
  intervalD() {
    // I HAVE NO IDEA
    const day = dayjs().add(1, "day").format("dddd").toLocaleLowerCase();
    return day;
  }
  toMonday(flashcard) {
    this.box.monday.push(flashcard);
  }
  toTuesday(flashcard) {
    this.box.tuesday.push(flashcard);
  }
  toWednesday(flashcard) {
    this.box.wednesday.push(flashcard);
  }
  toThursday(flashcard) {
    this.box.thursday.push(flashcard);
  }
  toFriday(flashcard) {
    this.box.friday.push(flashcard);
  }
  toSunday(flashcard) {
    this.box.sunday.push(flashcard);
  }
  toSaturday(flashcard) {
    this.box.saturday.push(flashcard);
  }
  setDay(day, flashcard) {
    switch (day) {
      case "monday":
        return this.toMonday(flashcard);
      case "tuesday":
        return this.toTuesday(flashcard);
      case "wednesday":
        return this.toWednesday(flashcard);
      case "thursday":
        return this.toThursday(flashcard);
      case "friday":
        return this.toFriday(flashcard);
      case "saturday":
        return this.toSaturday(flashcard);
      case "sunday":
        return this.toSunday(flashcard);
      default:
    }
    return "No day selected";
  }
  getDay() {
    switch (this.today) {
      case "monday":
        return this.box.monday;
      case "tuesday":
        return this.box.tuesday;
      case "wednesday":
        return this.box.wednesday;
      case "thursday":
        return this.box.thursday;
      case "friday":
        return this.box.friday;
      case "saturday":
        return this.box.saturday;
      case "sunday":
        return this.box.sunday;
      default:
        return "No day selected";
    }
  }
}
const srs = new SRS();

// console.log("Date started: ", srs.startDate);
// console.log("Day Started: ", srs.startDay);
// console.log("Today: ", srs.today);
// console.log("End date: ", srs.endDate);
// console.log("Interval A:  'I KNOW' = ", srs.intervalA());
// console.log("Interval B: 'I FORGOT' = ", srs.intervalB());
// console.log("Interval C: 'I COMPLETELY FORGOT' = ", srs.intervalC());
// console.log("Interval D: 'I HAVE NO IDEA' ", srs.intervalD());
srs.setDay(srs.intervalA(), "Am I in Saturday?");
// console.log("Interval A:  'I KNOW' = ", srs);
console.log("Today: ", srs.getDay());
