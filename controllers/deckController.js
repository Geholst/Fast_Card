const express = require('express');
const router = express.Router();
const {Deck, Flashcard, Profile, Box} = require('../models');
//  api/deck

// Get all Decks from logged in Profile
router.get("/",(req,res)=>{
    Deck.findAll({
        where:{profile_id:req.session.userId},
        include:[Flashcard]
    }).then(decks=>{
        if(decks.length===0){
            return res.status(404).json({msg:"No decks found for this profile."})
        }
        res.json(decks)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new deck
router.post("/", (req, res) => {
    Deck.create({
        name:req.body.name,
        ProfileId:req.session.userId
    }).then(newDeck=>{
        res.json(newDeck)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;