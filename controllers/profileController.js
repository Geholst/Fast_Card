const express = require('express');
const router = express.Router();
const {Profile,Deck} = require('../models');
const bcrypt = require("bcrypt");
//  api/profile

// Get all Profiles
router.get("/",(req,res)=>{
    Profile.findAll({
        include:[Deck]
    }).then(profile=>{
        if(profile.length===0){
            return res.status(404).json({msg:"No profiles found."})
        }
        res.json(profile)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

//Get Specific Profile by ID
router.get("/:id",(req,res)=>{
    Profile.findByPk(req.params.id,{
        include:[Deck]
    }).then(profile=>{
        if(!profile){
            return res.status(404).json({msg:"No profile with that id exists."})
        }
        res.json(profile)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Profile
router.post("/", (req, res) => {
    Profile.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    .then((newProfile) => {
        res.json(newProfile);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
});

// Update a Profile by ID
router.put("/:id",(req,res)=>{
    Profile.update({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        score: req.body.score
    },{
        where:{id:req.params.id}
    }).then(editProfile=>{
        if(!editProfile[0]){
            return res.status(404).json({msg:"No profile with that id exists."})
        }
        res.json(editProfile)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete Profile by ID
router.delete("/:id",(req,res)=>{
    Profile.destroy({
        where:{
            id:req.params.id
        }
    }).then(delProfile=>{
        if(!delProfile){
            return res.status(404).json({msg:"No profile with this id."})
        }
        res.json(delProfile)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Login
router.post("/login", (req, res) => {
    Profile.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((selectedProfile) => {
        if(!selectedProfile){
          return res.status(401).json({msg:"Invalid Username/Password"})
        }
        if(bcrypt.compareSync(req.body.password,selectedProfile.password)){
            console.log(selectedProfile);
            req.session.userId = selectedProfile.id;
            req.session.userName=selectedProfile.username;
          return res.json(selectedProfile);
        } else {
          return res.status(401).json({msg:"Invalid Username/Password"})
        }
      })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
      });
});

// Logout
router.post("/logout",(req,res)=>{
    req.session.destroy();
    res.json(req.session);
  })

module.exports = router;