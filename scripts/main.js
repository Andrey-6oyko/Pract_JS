// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'img/Metallica_logo.png') {
    myImage.setAttribute ('src','img/PS4Wallpapers.com_5a5ac513aa2f5_Metallica01.jpg');
  } else {
    myImage.setAttribute ('src','img/Metallica_logo.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hi, ' + myName + '. Metallica is an American heavy metal band';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hi, ' + storedName + '. Metallica is an American heavy metal band';
}

myButton.onclick = function() {
  setUserName();
}