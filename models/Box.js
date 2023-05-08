// leitner system box model
// Create a box class with a constructor
// that takes a box number and a list of cards
// and creates a box object with a box number and a list of cards
// and a method to add a card to the box
// and a method to remove a card from the box
// and a method to get the box number
// and a method to get the list of cards
// and a method to get the number of cards in the box

class Box {
    constructor(boxNumber, cards) {
        this.boxNumber = boxNumber;
        this.cards = cards;
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
        this.cards = this.cards.filter(c => c.id !== card.id);
    }

    getBoxNumber() {
        return this.boxNumber;
    }

    getCards() {
        return this.cards;
    }

    getNumberOfCards() {
        return this.cards.length;
    }
}