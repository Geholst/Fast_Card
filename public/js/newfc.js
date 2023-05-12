const flashcardCreate = document.querySelector("#fc-form");

flashcardCreate.addEventListener("submit",e=>{
    e.preventDefault();
    const flashcardObj = {
        name:document.querySelector("#new-fc-name").value,
        front:document.querySelector("#new-fc-front").value,
        back:document.querySelector("#new-fc-back").value
    }
    fetch("/api/flashcard/new",{
        method:"POST",
        body:JSON.stringify(flashcardObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        location.reload();
     })
})