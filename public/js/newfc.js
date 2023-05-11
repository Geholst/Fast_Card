const flashcardCreate = document.querySelector("#fc-form");
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
        name:document.querySelector("#new-fc-name").value,
        front:document.querySelector("#new-fc-front").value,
        back:document.querySelector("#new-fc-back").value,
        DeckId:pickedDeck
    }
    fetch("/api/flashcard/",{
        method:"POST",
        body:JSON.stringify(flashcardObj),
        headers: {"Content-Type":"application/json"}
    })
})