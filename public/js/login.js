const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("username-input"),
        password:document.getElementById("password-input")
    }
    fetch("/api/profile/login",{
        method:"POST",
        body:JSON.stringify(profileObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        if(res.ok){
           location.href = "/dashboard"
        } else {
            alert(response.statusText)
        }
    })
})