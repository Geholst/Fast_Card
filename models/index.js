const Flashcard = require("./Flashcard");
const Deck = require("./Deck");
const Box = require("./Box");
const Profile = require("./Profile");

Flashcard.belongsTo(Deck);
Deck.hasMany(Flashcard);

module.exports = {
    Flashcard:Flashcard,
    Deck:Deck
}