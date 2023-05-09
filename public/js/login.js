const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Login an existing Profile
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("login-username"),
        password:document.getElementById("login-password")
    }
    fetch("/api/profile/login",{
        method:"POST",
        body:JSON.stringify(profileObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        if(res.ok){
       //TODO: This needs to redirect properly
           location.href = "/dashboard"
        } else {
            alert(response.statusText)
        }
    })
})

// Signup a new Profile
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("signup-username"),
        firstName:document.getElementById("signup-first-name"),
        lastName:document.getElementById("signup-last-name"),
        email:document.getElementById("signup-email"),
        password:document.getElementById("signup-password")
    }
    fetch("/api/profile/",{
        method:"POST",
        body:JSON.stringify(profileObj),
        headers: {"Content-Type":"application/json"}
    }).then(res=>{
        if(res.ok){
            const loginObj = {
                username:profileObj.username,
                password:profileObj.password
            }
            fetch("/api/profile/login",{
                method:"POST",
                body:JSON.stringify(loginObj),
                headers: {"Content-Type":"application/json"}
        }).then(res=>{
            if(res.ok){
        //TODO: This needs to redirect properly
           location.href = "/dashboard"
        } else {
            alert(response.statusText)
        }})
    }
    })
})