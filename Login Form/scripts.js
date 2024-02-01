//signup

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submitBtn = document.getElementById("submitBtn");

let loginEmail = document.getElementById("logInEmail");
let loginpassword = document.getElementById("logInPassword");
let signin = document.getElementById("signin");

signin.addEventListener("click",(e)=>{
    e.preventDefault();
    signIn()
})


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    signUp()
})

//to signin
function signIn(){
    if(!loginEmail.value || !loginpassword.value){
        alert("fill the details before clicking on login button");
        return;
    }
    else{
        let userData = JSON.parse(localStorage.getItem("userData")) || [];

        let loginCheck = userData.filter(item => {
            if((item.email ===loginEmail.value) && (item.password ===loginpassword.value) ){
               return true;
            }
        })

        if(loginCheck.length){
            console.log("hi")
            alert("login successful");
            
        }
        else{
            alert("wrong credentials please try with correct email or password")
        }

    }
}

//to signup
function signUp(){
  
    if(!email.value || !username.value || !password.value || !confirmPassword.value){
        alert("input can't be empty");
        return;
    }
    else if(password.value!==confirmPassword.value){
        alert("password and confirm password should match!");
        return;
    }
    else{
        let userData = JSON.parse(localStorage.getItem("userData")) || [];
        let checkUser = userData.filter(item => item.email ===email.value);
        if(checkUser.length){
            alert("You have already registered...please login.");
            return;
        }
        let user = {
            email: email.value,
            username:username.value,
            password:password.value
        }
        
        userData.push(user);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("signUp successful!");
        window.location.href = "signin.html"
    }

} 



