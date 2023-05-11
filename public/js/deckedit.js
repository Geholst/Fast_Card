const button = document.getElementById("test")



// const fcId = // id of clicked button
// fetch(`/api/flashcard/${fcId}`,{
//     method:"DELETE"
// })

button.addEventListener("click",(event)=>{
    const item = event.target
    console.log(item);
})