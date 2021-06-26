const fullName = document.getElementById("fullname");
const contact = document.getElementById("phone-number");
const email = document.getElementById("email");

const country = document.getElementById("country");
const state = document.getElementById("state");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const submit = document.querySelector(".btn-sign");


let hideMe = document.querySelector(".hide");
let contactError = document.querySelector(".hide1");
let mailError = document.querySelector(".hide2");

let countryError = document.querySelector(".hide3");
let stateError = document.querySelector(".hide4");
let hidePasswordError = document.querySelector(".hide5");
let hideConfirmError = document.querySelector(".hide6");
//Name validation
fullName.addEventListener("input", function(event){
    if (fullName.validity.valid){
        hideMe.innerHTML = "";
        hideMe.className = "hide";
    }else{
        theError();
    }
   
});
submit.addEventListener("click", function(event) {
    if (!fullName.validity.valid){
        theError();
        event.preventDefault();
    }
});

function theError() {
    if (fullName.validity.valueMissing) {
        hideMe.textContent = "Fullname Cannot be Empty";
    }
    else if (fullName.validity.tooShort) {
        hideMe.textContent= "Should be a minimum of 5 characters"
    }
}

//Contact validation
contact.addEventListener("input", function(event){
    if (contact.validity.valid){
        contactError.innerHTML = "";
        contactError.className = "hide1";
    }else{
        phoneError();
    }
});
submit.addEventListener("click", function(event) {
    if (!contact.validity.valid){
        phoneError();
        event.preventDefault();
    }
})
function phoneError() {
    if (contact.validity.valueMissing) {
        contactError.textContent = "Phone Number Cannot be Empty";
    }
    if(contact.validity.typeMismatch){
        contactError.textContent = "Please Enter a Valid Number"
    }
}

//email validation
email.addEventListener("input", function(event){
    if (email.validity.valid){
        mailError.innerHTML = "";
        mailError.className = "hide1";
    }else{

        emailError();
    }
   
});
submit.addEventListener("click", function(event) {
    if (!email.validity.valid){
        emailError();
        event.preventDefault();
    }
});
function emailError() {
    if (email.validity.valueMissing) {
        mailError.textContent = "Email Cannot be Empty";
        
    }
    else if (email.validity.typeMismatch) {
        mailError.textContent= "This does not look like an email"
    }
}

//country and state validation 
country.addEventListener("input", function(event){
    if (country.validity.valid){
        countryError.innerHTML = "";
        countryError.className = "hide3";
    }else{
        error();
    }
});
submit.addEventListener("click", function(event) {
    if (!country.validity.valid){
        error();
        event.preventDefault();
    }
});
//state validation 
state.addEventListener("input", function(event){
    if (state.validity.valid){
        stateError.innerHTML = "";
        stateError.className = "hide3";
    }else{
        error();
    }
});
submit.addEventListener("click", function(event) {
    if (!state.validity.valid){
        error();
        event.preventDefault();
    }
});

function error() {
    if (country.validity.valueMissing) {
        countryError.textContent = "This field cannot be empty";
    }
    if (state.validity.valueMissing) {
        stateError.textContent = "This field cannot be empty";
    }
}

//password validation
password.addEventListener("input", function(event){
    if (password.validity.valid){
        hidePasswordError.innerHTML = "";
        hidePasswordError.className = "hide5";
    }else{
        passwordError();
    }
   
});
submit.addEventListener("click", function(event) {
    let passwords = password.value
    console.log(passwords)
    if (!password.validity.valid){
        passwordError();
        event.preventDefault();
    }
});
function passwordError() {
    let hasLower = /[a-z]/g;
    let hasUpper = /[A-Z]/g;
    let hasNumber = /[0-9]/g;

    if (password.validity.valueMissing) {
        hidePasswordError.textContent = "Please Input a Password";
        
    }
    if (!password.value.match(hasLower)) {
        hidePasswordError.textContent= "Password must contain at least 1 lowercase letter "
    }
    else if (!password.value.match(hasUpper)) {
        hidePasswordError.textContent= "Password must contain at least 1 UpperCase letter "
    }
    if (!password.value.match(hasNumber)) {
        hidePasswordError.textContent= "Password must contain at least 1 number "
    }
    if (password.validity.tooShort) {
        hidePasswordError.textContent = "Password must be 6 characters or more"
    }
    
}
//validate password confirmation
confirmPassword.addEventListener("input", function(event){
    if (confirmPassword.validity.valid){
        hideConfirmError.innerHTML = "";
        hideConfirmError.className = "hide6";
    }else{
        confirmError();
    }
   
});
submit.addEventListener("click", function(event) {
    let passwordss = confirmPassword.value
    console.log(passwordss)
    if (!confirmPassword.validity.valid){
        confirmError();
        event.preventDefault();
    }
});
function confirmError() {
    if (confirmPassword.validity.valueMissing) {
        hideConfirmError.textContent = "Confirm Password";
    }
    //if (password!==confirmPassword) {
        //hideConfirmError.textContent= "Passwords does not Match";
    //}
}
const togglePassword = document.querySelector("#toggle-password");
togglePassword.addEventListener("click", function(e){
    // toggle the type attribute
    if (password.type === "password") {
    password.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    password.type = "password";
    this.classList.toggle("fa-eye-slash");
    
  }
});
const togglePassword2 = document.querySelector("#toggle-password2");
togglePassword2.addEventListener("click", function(e){
    // toggle the type attribute
    if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    this.classList.toggle("fa-eye-slash");
  } else {
    confirmPassword.type = "password";
    this.classList.toggle("fa-eye-slash"); 
  }
});