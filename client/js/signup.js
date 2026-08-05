const signupForm=document.getElementById('signupForm');

if(signupForm){
    signupForm.addEventListener('submit',handleSignup);
}

function handleSignup(event){
    event.preventDefault();
    const fullname=document.getElementById('fullname').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    const termsAccepted =document.getElementById("terms").checked;

    const fullnameError=document.getElementById('fullnameError');
    const emailError=document.getElementById('emailError');
    const passwordError=document.getElementById('passwordError');
    const confirmPasswordError=document.getElementById('confirmPasswordError');
    const successMessage=document.getElementById('successMessage');
    const termsError=document.getElementById('termsError');

    fullnameError.textContent='';
    emailError.textContent='';
    passwordError.textContent='';
    confirmPasswordError.textContent='';
    successMessage.textContent='';
    termsError.textContent='';

    fullnameError.style.display='none';
    emailError.style.display='none';
    passwordError.style.display='none';
    confirmPasswordError.style.display='none';
    successMessage.style.display='none';
    termsError.style.display='none';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!fullname)
    {
        fullnameError.textContent="Please enter your name";
        fullnameError.style.display="block";
        return;
    }
    
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
    if(!confirmPassword){
        confirmPasswordError.textContent = "Please enter the correct password again";
        confirmPasswordError.style.display = "block";
        return;
    }
    if(confirmPassword!==password)
    {
        confirmPasswordError.textContent="The passwords do not match";
        confirmPasswordError.style.display = "block";
        return;
    }
    if(!termsAccepted){
        termsError.textContent = "You must accept the terms and conditions.";
        termsError.style.display = "block";
        return;
    }
    successMessage.textContent = "Account created successfully! redirecting to login page";
    successMessage.style.display = "block";

    setTimeout(() => {
    window.location.href = "login.html";
    }, 1500);
}