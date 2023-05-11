const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit",e=>{
  e.preventDefault();
  const profileObj = {
      username:document.querySelector("#username-input").value,
      password:document.querySelector("#password-input").value
  }
  console.log(profileObj)
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

// const login = async (e) => {
//     e.preventDefault();
//       const response = await fetch("/api/profile/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             username:document.getElementById("username-input"),
//             password:document.getElementById("password-input")
//         }),
//       });
//       if(res.ok){
//         location.href = "/dashboard"
//      } else {
//          alert(response.statusText)
//      }
// }

//   loginForm.addEventListener("submit", login);