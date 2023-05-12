const express = require("express");
const router = express.Router();
const test = require("./testController");
const profileRoutes = require("./profileController");
const deckRoutes = require("./deckController");
const flashcardRoutes = require("./flashcardController");
const frontendRoutes = require("./frontendRoutes");
const sample = require("./sampleController");
const reviewRoute = require("./reviewSessionController");

router.use("/api/profile", profileRoutes);
router.use("/api/deck", deckRoutes);
router.use("/api/flashcard", flashcardRoutes);
router.use("/sample", sample);
router.use("/api/review", reviewRoute);
router.use("/", frontendRoutes);

module.exports = router;
