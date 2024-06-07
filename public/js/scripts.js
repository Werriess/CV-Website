const calc = document.getElementById("calc");
const memory = document.getElementById("memory");
const prov = document.getElementById("prov");
const dereuck = document.getElementById("dereuck");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("phone");

if(calc !== null) {
    calc.addEventListener("click", ()=> {
        window.location.href = "https://github.com/Werriess/Calculator";
    })
}

if(memory !== null) {
    memory.addEventListener("click", ()=> {
        window.location.href = "https://github.com/Werriess/MemoryGame";
    })
}

if(prov !== null) {
    prov.addEventListener("click", ()=> {
        window.location.href = "https://github.com/Werriess/Province-game";
    })
}

if(dereuck !== null) {
    dereuck.addEventListener("click", ()=> {
        window.location.href = "https://github.com/Werriess/De-reuck_website_New"
    })
}

function validateUserName() {
    let containsNumber = /\d/.test(userName.value);
    if(userName.value.length < 2 || userName.value == "" || containsNumber) {
        userName.style.borderColor = "red";
    }
    else {
        userName.style.borderColor = "black";
    }
}

if(userName !== null) {
    userName.addEventListener("focusout", validateUserName);
}

function validateEmail() {
    const regexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailTest = regexPattern.test(email.value);
    if(!emailTest) {
        email.style.borderColor = "red";
        email.value = null;
    }
    else {
        email.style.borderColor = "black";
    }
}

if(email !== null) {
    email.addEventListener("focusout", validateEmail);
}

function validatePhone() {
    const regexPattern = /^\d+$/;
    let telTest = regexPattern.test(tel.value);
    if(!telTest) {
        tel.style.borderColor = "red";
        tel.value = null;
    }
    else {
        tel.style.borderColor = "black";
    }
}

if(tel !== null) {
    tel.addEventListener("focusout", validatePhone);
}

console.log("Js is connected");