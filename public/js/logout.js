document.querySelector("#logout-button").addEventListener("click",e=>{
    e.preventDefault();
    fetch("/api/profile/logout",{
        method:"POST",
    }).then(res=>{
        if(res.ok){
            location.href = "/"
        } else {
            alert(response.statusText)
        }
    })
})