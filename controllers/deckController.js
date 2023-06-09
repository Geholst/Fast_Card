const express = require('express');
const router = express.Router();
const {Deck, Flashcard, Profile} = require('../models');
//  api/deck

// Get all Decks
router.get("/",(req,res)=>{
    Deck.findAll({
        include:[Flashcard]
    }).then(decks=>{
        if(decks.length===0){
            return res.status(404).json({msg:"No decks found."})
        }
        res.json(decks)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Decks from logged in Profile
router.get("/userdecks",(req,res)=>{
    Deck.findAll({
        where:{ProfileId:req.session.userId},
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

// Get specific Deck by ID
router.get("/:id",(req,res)=>{
    Deck.findByPk(req.params.id,{
        include:[Flashcard]
    }).then(deck=>{
        if(!deck){
            return res.status(404).json({msg:"No deck with that id exists."})
        }
        res.json(deck)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Deck
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

// Update a Deck by ID
router.put("/:id",(req,res)=>{
    Deck.update({
        name:req.body.name,
        started:req.body.started,
        finished:req.body.finished,
    },{
        where:{id:req.params.id}
    }).then(editDeck=>{
        if(!editDeck[0]){
            return res.status(404).json({msg:"No deck with that id exists."})
        }
        res.json(editDeck)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Deck by ID
router.delete("/:id",(req,res)=>{
    Deck.destroy({
        where:{
            id:req.params.id
        }
    }).then(delDeck=>{
        if(!delDeck){
            return res.status(404).json({msg:"No deck with this id."})
        }
        res.json(delDeck)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Setup session data for selected deck
router.post("/pickdeck", (req, res) => {
    Deck.findOne({
        where: {
          id: req.body.id,
        },
      }).then((pickedDeck) => {
        if(!pickedDeck){
          return res.status(404).json({msg:"No deck with that id."})
        }
            console.log(pickedDeck);
            req.session.sessDeckId = pickedDeck.id;
            req.session.sessDeckName = pickedDeck.name;
            return res.json(pickedDeck);
      })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
      });
});

module.exports = router;