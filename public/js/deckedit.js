const delButton = document.querySelectorAll(".del-btn");

for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener("click", e=>{
        console.log(delButton[i]);
        console.log(e.target)
    const fcId = e.target.id
        fetch(`/api/flashcard/${fcId}`,{
            method:"DELETE"
        }).then(res=>{
           location.reload();
        })
    })
}