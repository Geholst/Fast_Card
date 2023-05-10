let selectedDeckId;

fetch(`/api/flashcard/deck/${selectedDeckId}`,{
    method:"GET"
}).then(res=>{
    if(res.ok){
       location.href = "/"
    } else {
        alert(response.statusText)
    }
})