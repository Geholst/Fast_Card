const Flashcard = require("../models/Flashcard");
const sequelize = require("../config/connection");
const hiragana = require("./hiragana.json");
const katakana = require("./katakana.json");
const seed = async () => {
  await sequelize.sync({ force: true });
  await Flashcard.bulkCreate(hiragana);
  await Flashcard.bulkCreate(katakana);
  console.log("SEEDED DATABASE");
  process.exit(0);
};

seed();
