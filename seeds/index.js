const sequelize = require("../config/connection");
const {Profile,Deck,Flashcard} = require("../models");

const profiles = [
    {
        username:"Meow",
        firstName:"Kitty",
        lastName:"Cat",
        email:"meow@kitty.cat",
        password:"password"
    },
    {
        username:"Woof",
        firstName:"Puppy",
        lastName:"Dog",
        email:"woof@puppy.dog",
        password:"password"
    },
]

const decks = [
    {
        name:"Deck 1",
        started:false,
        finished:false,
        ProfileId:1,
    },
    {
        name:"Deck 2",
        started:false,
        finished:false,
        ProfileId:1,
    },
    {
        name:"Deck A",
        started:false,
        finished:false,
        ProfileId:2,
    },
]

const flashcards = [
    {
        name:"Card 1-1",
        front:"Description",
        back:"Description",
        DeckId:1,
    },
    {
        name:"Card 1-2",
        front:"Description",
        back:"Description",
        DeckId:1,
    },
    {
        name:"Card 1-3",
        front:"Description",
        back:"Description",
        DeckId:1,
    },
    {
        name:"Card 1-4",
        front:"Description",
        back:"Description",
        DeckId:1,
    },
    {
        name:"Card 1-5",
        front:"Description",
        back:"Description",
        DeckId:1,
    },
    {
        name:"Card 2-1",
        front:"Description",
        back:"Description",
        DeckId:2,
    },
    {
        name:"Card 2-2",
        front:"Description",
        back:"Description",
        DeckId:2,
    },
    {
        name:"Card 2-3",
        front:"Description",
        back:"Description",
        DeckId:2,
    },
    {
        name:"Card 2-4",
        front:"Description",
        back:"Description",
        DeckId:2,
    },
    {
        name:"Card 2-5",
        front:"Description",
        back:"Description",
        DeckId:2,
    },
    {
        name:"Card A-1",
        front:"Description",
        back:"Description",
        DeckId:3,
    },
    {
        name:"Card A-2",
        front:"Description",
        back:"Description",
        DeckId:3,
    },
    {
        name:"Card A-3",
        front:"Description",
        back:"Description",
        DeckId:3,
    },
    {
        name:"Card A-4",
        front:"Description",
        back:"Description",
        DeckId:3,
    },
    {
        name:"Card A-5",
        front:"Description",
        back:"Description",
        DeckId:3,
    },
]

const startSeeding = async ()=>{
    try{
        await sequelize.sync({force:true});
        const profileData = await Profile.bulkCreate(profiles,{individualHooks:true});
        const decksData = await Deck.bulkCreate(decks);
        const flashcardsData = await Flashcard.bulkCreate(flashcards);
        console.log("Seeds planted")
    } catch (err){
        console.log(err)
    }
}

startSeeding()