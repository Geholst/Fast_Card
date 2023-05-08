const express = require('express');
const router = express.Router();

const deckRoutes = require("./deckController");
const flashcardRoutes = require("./flashcardController");

router.use("/api/deck", deckRoutes);
router.use("/api/flashcard", flashcardRoutes);

module.exports=router;