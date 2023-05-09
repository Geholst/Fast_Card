const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Login an existing Profile
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    const profileObj = {
        username:document.getElementById("login-username"),
        firstName:document.getElementById("login-first-name"),
        lastName:document.getElementById("login-last-name"),
        email:document.getElementById("login-email"),
        password:document.getElementById("login-password")
    }
    fetch("/api/profile/login",{
        method:"POST",
        body:JSON.stringify(profileObj),
        // --------------don't know after this
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("trumpet sound")
        }
    })
})

// Signup a new Profile