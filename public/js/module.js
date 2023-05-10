// -- This file is a potential concept --
const deckCreate = document.getElementById("module-new-deck");

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