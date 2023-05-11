const express = require('express');
const router = require("express").Router();
const app = express();
const {Profile, Deck, Flashcard} = require("../models");


//renders homepage
router.get("/", async (req,res) => {
      res.render("main", {layout: 'index'})
})

// Route to render the login screen
router.get("/login", async (req,res) => {
  try {
    if (req.session.userId) {
      res.redirect("/dashboard")
    } else {
      res.render("login", {layout: 'index'})
    }  
  } catch (err) {
      console.log(err)
      res.status(500).json({ msg: "ERROR", err });
    }
})

// Route to render the dashboard screen
router.get("/dashboard", async (req,res) => {
  try {
    if (!req.session.userId) {
      res.redirect("/login")
    }
    const profileData = await Profile.findByPk(req.session.userId, {
      include: {
        all: true,
        nested: true
      }
    })
    const profile = profileData.get({plain: true})
    console.log(profile)
    return res.render("dashboard", {...profile, layout: 'index'})
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "ERROR", err });
  }
})

// Route to render the review screen
router.get("/review/:id", async (req,res) => {
  try {
    const flashcardsData = await Flashcard.findAll({
      where:{DeckId:req.params.id}
    })
    const flashcards = flashcardsData.get({plain: true})
    console.log(flashcards)
    return res.render("review", flashcards)
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "ERROR", err });
  }
})

// Route to render the signup screen
router.get("/signup", async (req,res) => {
  try {
    if (req.session.userId) {
      res.redirect("/dashboard")
    } else {
      res.render("signup", {layout: 'index'})
    }  
  } catch (err) {
      console.log(err)
      res.status(500).json({ msg: "ERROR", err });
    }
})

// Route to render the new flashcard screen
router.get("/newfc", async (req,res) => {
  try {
    // if (!req.session.userId) {
    //   res.redirect("/login")
    // }
    const profileData = await Profile.findByPk(req.session.userId, {
      include: {
        all: true,
        nested: true
      }
    })
    const profile = profileData.get({plain: true})
    console.log(profile)
    return res.render("newfc", {user: profile, layout: 'index'})
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "ERROR", err });
  }
})

// Route to render the new deck screen
router.get("/newdeck", async (req,res) => {
  try {
    // if (req.session.userId) {
    //   res.redirect("/login")
    // } else {
      res.render("newdeck", {layout: 'index'})
    // }  
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "ERROR", err });
  }
})

// Route to render the deck editor screen
router.get("/deckedit/:id", async (req,res) => {
  try {
    const deckData = await Deck.findByPk(req.params.id,{
      include: {
        all: true,
        nested: true
      }
    })
    //TODO: add check for deck's profile id matching the session user id
    console.log(deckData)
    const deck = deckData.get({ plain:true })
    console.log(deck)
    res.render("deckedit", {...deck, layout: 'index'})
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "ERROR", err });
  }
})
// res.render("home",allProjects:deck)
module.exports = router
