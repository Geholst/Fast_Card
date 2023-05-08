const express = require('express');
const router = express.Router();
const {Profile,Deck} = require('../models');
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
    Profile.findByPk(req.params.id).then(profile=>{
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
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.lastname,
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
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.lastname,
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
        name: req.body.name,
      },
    })
    .then((foundProfile) => {
        if(!foundProfile){
          return res.status(401).json({msg:"invalid username/password"})
        }
        if(bcrypt.compareSync(req.body.password,foundProfile.password)){
          req.session.userId = foundProfile.id;
          req.session.userName=foundProfile.username;
          return res.json(foundProfile);
        } else {
          return res.status(401).json({msg:"invalid username/password"})
        }
      })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
      });
});

module.exports = router;