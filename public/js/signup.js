const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("signup-username"),
        password:document.getElementById("signup-password")
    }
    fetch("/api/profile/",{
        method:"POST",
        body:JSON.stringify(profileObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
            if(res.ok){
           location.href = "/login"
        } else {
            alert(response.statusText)
        }
    })
})