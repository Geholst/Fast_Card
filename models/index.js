const Flashcard = require("./Flashcard");
const Deck = require("./Deck");
const Profile = require("./Profile");


Flashcard.belongsTo(Deck);
Deck.hasMany(Flashcard);

Deck.belongsTo(Profile);
Profile.hasMany(Deck);

module.exports = {
    Flashcard:Flashcard,
    Deck:Deck,
    Profile:Profile
}