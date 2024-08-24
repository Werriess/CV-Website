const calc = document.getElementById("calc");
const memory = document.getElementById("memory");
const prov = document.getElementById("prov");
const dereuck = document.getElementById("dereuck");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("phone");
const goHome = document.getElementById("goHome");
const dayNight = document.getElementById("dayNight");
const header = document.getElementById("indexTitle");
const indexContent = document.getElementById("content");
const infoIndex = document.getElementById("infoIndex");


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

if(goHome !== null) {
    goHome.addEventListener("click", ()=> {
        window.location.href = "/home"
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

// let counter = 1;

// function changeBackgroundColor() {
//     if(counter % 2 === 0) {
//         indexContent.style.backgroundImage = "url('../images/dark-minimal-hexagons-background_79603-1454.jpg')";
//         header.classList.remove("toggle");
//     } else {
//         header.classList.add("toggle");
//         indexContent.style.backgroundImage = "none";
//     }
//     counter++;
// }

// if(dayNight !== null) {
//     dayNight.addEventListener("click", changeBackgroundColor);
// }

console.log("Js is connected");