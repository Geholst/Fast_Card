const express = require('express');
const router = express.Router();

const profileRoutes = require("./profileController");
const deckRoutes = require("./deckController");
const flashcardRoutes = require("./flashcardController");

router.get("/",(req,res)=>{
    res.send("login")
})

router.get("/dashboard", (req,res)=>{
    res.send("dashboard")
})

router.use("/api/profile", profileRoutes);
router.use("/api/deck", deckRoutes);
router.use("/api/flashcard", flashcardRoutes);

module.exports=router;