
// -- Part of a function --
const fcObj = {
    reviewDay:flashcard.reviewDay
}
fetch(`/api/flashcard/${flashcard.id}`,{
    method:"PUT",
    body:JSON.stringify(fcObj),
    headers: {"Content-Type":"application/json"}
})