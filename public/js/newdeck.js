const deckCreate = document.querySelector("#deck-form");

deckCreate.addEventListener("submit",e=>{
    e.preventDefault();
    const deckObj = {
        name:document.querySelector("#new-deck-name").value
    }
    fetch("/api/deck/",{
        method:"POST",
        body:JSON.stringify(deckObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        window.location.assign(`/dashboard`)
    })
})