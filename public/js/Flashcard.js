export class Flashcard {
  constructor(name, front, back, reviewDay, isStarted, tag) {
    this.name = name;
    this.front = front;
    this.back = back;
    this.isStarted = isStarted;
    this.reviewDay = reviewDay;
    this.tag = tag;
  }
}
