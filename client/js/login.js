const planTripButton = document.getElementById("planTripButton");

if (planTripButton) {
    planTripButton.addEventListener("click", () => {
        console.log("Plan Trip button clicked");
    });
}



const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    emailError.style.display = "none";
    passwordError.style.display = "none";
    successMessage.style.display = "none";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        return;
    }
    if(!emailRegex.test(email)){
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return;
    }
    if(!password){
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        return;
    }
    if(password.length < 8){
        passwordError.textContent = "Password must be at least 8 characters long.";
        passwordError.style.display = "block";
        return;
    }
    successMessage.textContent = "Login successful! Redirecting to dashboard...";
    successMessage.style.display = "block";

    


    console.log("Email:", email);
    console.log("Password:", password);

    console.log("Login form submitted");
    setTimeout(() => {
    window.location.href = "dashboard.html";
    }, 1500);

}



