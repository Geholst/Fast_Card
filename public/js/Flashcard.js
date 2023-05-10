class Flashcard {
  constructor(id, front, back, reviewDay, isStarted) {
    this.id = id;
    this.front = front;
    this.back = back;
    this.isStarted = isStarted;
    this.reviewDay = reviewDay;
  }
}

export default Flashcard;
