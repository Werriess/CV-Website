const vidJump = document.getElementById("vidJump");
const mlg = document.getElementById("mlg");
const bookie = document.getElementById("bookie");
const algoGraph = document.getElementById("algoGraph");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("phone");
const goHome = document.getElementById("goHome");
const dayNight = document.getElementById("dayNight");
const header = document.getElementById("indexTitle");
const indexContent = document.getElementById("content");
const infoIndex = document.getElementById("infoIndex");
const flickerNeuralOne = document.getElementById("flickerOne");
const flickerNeuralTwo = document.getElementById("flickerTwo");
const flickerNeuralThree = document.getElementById("flickerThree");
const flickerNeuralFour = document.getElementById("flickerFour");
const flickerNeuralFive = document.getElementById("flickerFive");
const flickerNeuralSix = document.getElementById("flickerSix");
const flickerNeuralSeven = document.getElementById("flickerSeven");
const flickerNeuralEight = document.getElementById("flickerEight");
const flickerNeuralNine = document.getElementById("flickerNine");
const flickerNeuralTen = document.getElementById("flickerTen");
const flickerNeuralEleven = document.getElementById("flickerEleven");
const flickerNeuralTwelve = document.getElementById("flickerTwelve");
const flickerNeuralThirteen = document.getElementById("flickerThirteen");
const flickerNeuralFourteen = document.getElementById("flickerFourteen");
const flickerNeuralFifteen = document.getElementById("flickerFithteen");
const flickerNeuralSixteen = document.getElementById("flickerSixteen");
const flickerNeuralSeventeen = document.getElementById("flickerSeventeen");
const flickerNeuralEighteen = document.getElementById("flickerEighteen");
const flickerNeuralNineteen = document.getElementById("flickerNineteen");
const flickerNeuralTwenty = document.getElementById("flickerTwenty");
const flickerNeuralTwentyOne = document.getElementById("flickerTwentyOne");
const gridItems = document.querySelectorAll(".grid-item");
const transcriptBtn = document.getElementById("transcript");
const transcriptForm = document.querySelector(".transcriptForm");
const projectBlock = document.querySelector(".project-block");
const closeBtn = document.querySelector(".close-btn");
const transcriptFormSubmit = document.getElementById("transcriptForm");
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");

if (vidJump !== null) {
  vidJump.addEventListener("click", () => {
    window.location.href = "https://github.com/Werriess/VidJump";
  });
}

if (mlg !== null) {
  mlg.addEventListener("click", () => {
    window.location.href = "https://github.com/Werriess/Machine-Learning-382-Project-1";
  });
}

if (bookie !== null) {
  bookie.addEventListener("click", () => {
    window.location.href = "https://github.com/Werriess/bookie";
  });
}

if (algoGraph !== null) {
  algoGraph.addEventListener("click", () => {
    window.location.href = "https://werriess.github.io/AlgoGraphix";
  });
}

if (goHome !== null) {
  goHome.addEventListener("click", () => {
    window.location.href = "/home";
  });
}

if(transcriptBtn !== null) {
    transcriptBtn.addEventListener("click", () => {
      transcriptForm.style.display = "flex";
      projectBlock.style.display = "none";
    })
}

closeBtn.addEventListener("click", () => {
  transcriptForm.style.display = "none";
  projectBlock.style.display = "flex";

});

function validateUserName() {
  let containsNumber = /\d/.test(userName.value);
  if (userName.value.length < 2 || userName.value == "" || containsNumber) {
    userName.style.borderColor = "red";
  } else {
    userName.style.borderColor = "black";
  }
}

if (userName !== null) {
  userName.addEventListener("focusout", validateUserName);
}

function validateEmail() {
  const regexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailTest = regexPattern.test(email.value);
  if (!emailTest) {
    email.style.borderColor = "red";
    email.value = null;
  } else {
    email.style.borderColor = "black";
  }
}

if (email !== null) {
  email.addEventListener("focusout", validateEmail);
}

function validatePhone() {
  const regexPattern = /^\d+$/;
  let telTest = regexPattern.test(tel.value);
  if (!telTest) {
    tel.style.borderColor = "red";
    tel.value = null;
  } else {
    tel.style.borderColor = "black";
  }
}

if (tel !== null) {
  tel.addEventListener("focusout", validatePhone);
}

//Highlighting different dots in neural network
const nodes = [
  flickerNeuralOne,
  flickerNeuralTwo,
  flickerNeuralThree,
  flickerNeuralFour,
  flickerNeuralFive,
  flickerNeuralSix,
  flickerNeuralSeven,
  flickerNeuralEight,
  flickerNeuralNine,
  flickerNeuralTen,
  flickerNeuralEleven,
  flickerNeuralTwelve,
  flickerNeuralThirteen,
  flickerNeuralFourteen,
  flickerNeuralFifteen,
  flickerNeuralSixteen,
  flickerNeuralSeventeen,
  flickerNeuralEighteen,
  flickerNeuralNineteen,
  flickerNeuralTwenty,
  flickerNeuralTwentyOne,
];

let originalColor = "white";

function changeColor(nodeChosen) {
  nodeChosen.style.fill = "rgb(255, 238, 0)";
}

function resetColor(nodeChosen) {
  nodeChosen.style.fill = originalColor;
}

function animateColor() {
  nodes.forEach((node) => resetColor(node));

  let randomIndex = Math.floor(Math.random() * nodes.length);
  changeColor(nodes[randomIndex]);
}

if (nodes.every((node) => node !== null)) {
  setInterval(animateColor, 1000);
}

//Add animation display on skills grid

gridItems.forEach(gridItem => {
  gridItem.addEventListener("mouseenter", () => {
    let p = gridItem.querySelector("p");
    let item = gridItem.querySelector("svg");
    if (p && item) {
      p.style.visibility = "visible";
      p.style.fontSize = "small";
      p.style.opacity = "0.7"
      item.style.transform = "scale(1.2)"
    }
  });

  gridItem.addEventListener("mouseleave", () => {
    let p = gridItem.querySelector("p");
    let item = gridItem.querySelector("svg");
    if (p && item) {
      p.style.visibility = "hidden";
      item.style.transform = "scale(1)"
    }
  });
});
/*
  On form submit, get response from backend and send a messgae to the frontend
*/
transcriptFormSubmit.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById('transcriptName').value;
    const email = document.getElementById('transcriptEmail').value;
    const reason = document.getElementById('transcriptReason').value;

    try {
        const response = await fetch('/transcript/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, reason })
        });

        if (response.ok) {
            const data = await response.json();
            showNotification(data.message, 'success');  
            transcriptFormSubmit.reset(); 
        } else {
            const errorData = await response.json();
            showNotification(`Error: ${errorData.message}`, 'error');
        }
    } catch (error) {
      showNotification('An error occurred while submitting the request.', 'error');
        console.error('Error:', error);
    }

    //Function to allow the message from the backend to be displayed in div in the frondend

    function showNotification(message, type) {
      notificationMessage.textContent = message;
      notification.classList.remove('hidden');
      notification.classList.add('visible');
  
      if (type === 'error') {
          notification.classList.add('error');
      } else {
          notification.classList.remove('error');
      }
  
      setTimeout(() => {
          notification.classList.remove('visible');
          notification.classList.add('hidden');
      }, 3000);
  }
})

console.log("Js is connected");
