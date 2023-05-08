const express = require('express');
const router = express.Router();

const deckRoutes = require("./deckController");

router.use("/api/deck", deckRoutes);

module.exports=router;