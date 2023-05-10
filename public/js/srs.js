module.exports = function srs(flashcards = []) {
  flashcards.forEach((flashcard) => {
    flashcard.isStarted = true;
    flashcard.reviewDay = dayLabel;
  });
};
