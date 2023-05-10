const flashcardCreate = document.getElementById("fc-form");
const deckSelection = document.querySelectorAll('input[name="deck"]');

flashcardCreate.addEventListener("submit",e=>{
    e.preventDefault();
    let pickedDeck;
    for (let i = 0; i < deckSelection.length; i++) {
        if (deckSelection[i].checked){
            pickedDeck = deckSelection[i].id
        }
    }
    const flashcardObj = {
        name:document.getElementById("new-fc-name"),
        front:document.getElementById("new-fc-front"),
        back:document.getElementById("new-fc-back"),
        DeckId:pickedDeck
    }
    fetch("/api/flashcard/",{
        method:"POST",
        body:JSON.stringify(flashcardObj),
        headers: {"Content-Type":"application/json"}
    })
})