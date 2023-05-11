const deckCreate = document.querySelector("#fc-form");

deckCreate.addEventListener("submit",e=>{
    e.preventDefault();
    const deckObj = {
        name:document.querySelector("#new-fc-name").value
    }
    fetch("/api/deck/",{
        method:"POST",
        body:JSON.stringify(deckObj),
        headers: {"Content-Type":"application/json"}
    })
})