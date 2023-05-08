const express = require('express');
const router = express.Router();
const {Deck, Flashcard, Box} = require('../models');
//  api/flashcard

// Get all Flashcards from a Deck by Deck ID
router.get("/:id",(req,res)=>{
    Flashcard.findAll({
        where:{DeckId:req.params.id},
    }).then(flashcards=>{
        if(flashcards.length===0){
            return res.status(404).json({msg:"No flashcards found for this deck."})
        }
        res.json(flashcards)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific Flashcard by ID
router.get("/:id",(req,res)=>{
    Flashcard.findByPk(req.params.id).then(card=>{
        if(!card){
            return res.status(404).json({msg:"No flashcard with that id exists."})
        }
        res.json(card)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Flashcard
router.post("/", (req, res) => {
    Flashcard.create({
        name:req.body.name,
        front:req.body.front,
        back:req.body.back,
        DeckId:req.body.DeckId,
    }).then(newCard=>{
        res.json(newCard)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Flashcard by ID TODO: Update box as well?
router.put("/:id",(req,res)=>{
    Flashcard.update({
        name:req.body.name,
        front:req.body.front,
        back:req.body.back,
        tag:req.body.tag,
    },{
        where:{id:req.params.id}
    }).then(editFlashcard=>{
        if(!editFlashcard[0]){
            return res.status(404).json({msg:"No flashcard with that id exists."})
        }
        res.json(editFlashcard)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete Flashcard by id
router.delete("/:id",(req,res)=>{
    Flashcard.destroy({
        where:{
            id:req.params.id
        }
    }).then(delFlashcard=>{
        if(!delFlashcard){
            return res.status(404).json({msg:"No flashcard with this id."})
        }
        res.json(delFlashcard)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;