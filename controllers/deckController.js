const express = require('express');
const router = express.Router();
const {Deck, Flashcard, Profile, Box} = require('../models');
//  api/deck

// Get all Decks from selected Profile
router.get("/selectprofile/:id",(req,res)=>{
    Deck.findAll({
        where:{profile_id:req.params.id},
        include:[Flashcard]
    }).then(deck=>{
        if(deck.length===0){
            return res.status(404).json({msg:"No decks found for this profile."})
        }
        res.json(deck)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
})


module.exports = router;