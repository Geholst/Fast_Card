const deckSelectorBtns = document.querySelectorAll(".deck-btn");
const deckH3 = document.querySelector("#selected-deck");
const editBtn = document.querySelector("#edit-btn");
const newFcBtn = document.querySelector("#newfc-btn");
const newDeckBtn = document.querySelector("#newdeck-btn");
let selectedDeckId;

for (let i = 0; i < deckSelectorBtns.length; i++) {
    deckSelectorBtns[i].addEventListener("click", e=>{
        selectedDeckId = e.target.id;
        deckH3.innerHTML = `Current Selected Deck: ${e.target.name}`
        console.log(selectedDeckId)
        fetch(`/pickdeck/${selectedDeckId}`,{
            method:"POST",
            headers: {"Content-Type":"application/json"}
        })
    })
}

editBtn.addEventListener("click", e=>{
    if(!selectedDeckId){
        alert("Select a deck in order to Edit");
        return;
    }
    window.location.assign(`/deckedit/${selectedDeckId}`)
})

newDeckBtn.addEventListener("click", e=>{
    window.location.assign(`/newdeck`)
})

newFcBtn.addEventListener("click", e=>{
    window.location.assign(`/newfc`)
})