const signupForm = document.getElementById("login-form");

signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("username-input").value,
        password:document.getElementById("password-input").value
    }
    fetch("/api/profile/",{
        method:"POST",
        body:JSON.stringify(profileObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
            if(res.ok){
           location.href = "/login"
        } else {
            alert(res.statusText)
        }
    })
})