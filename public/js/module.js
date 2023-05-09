// -- This file is a potential concept --
const deckCreate = document.getElementById("module-new-deck");
const flashcardCreate = document.getElementById("module-new-fc");

deckCreate.addEventListener("submit",e=>{
    e.preventDefault();
    const deckObj = {
        name:document.getElementById("new-deck-name"),
    }
    fetch("/api/deck/",{
        method:"POST",
        body:JSON.stringify(deckObj),
        headers: {"Content-Type":"application/json"}
     })
})

flashcardCreate.addEventListener("submit",e=>{
    e.preventDefault();
    const flashcardObj = {
        name:document.getElementById("new-fc-name"),
        front:document.getElementById("new-fc-front"),
        back:document.getElementById("new-fc-back"),
        //DeckId: maybe some type of variable setup from selecting a deck prior?
    }
    fetch("/api/flashcard/",{
        method:"POST",
        body:JSON.stringify(flashcardObj),
        headers: {"Content-Type":"application/json"}
    })
})