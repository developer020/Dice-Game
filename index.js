var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// SHORTER VERSION:
// var randomImage1 = "images/dice" + randomNumber1 + ".png";
// var randomImage2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelector(".img1").setAttribute("src", randomImage1);
// document.querySelector(".img2").setAttribute("src", randomImage2);


// RANDOMLY CHANGE FIRST DICE IMAGE
function firstRandomNumber() {
    if (randomNumber1 === 1) {
      document.querySelector(".img1").src = "images/dice1.png";
    } else if (randomNumber1 === 2) {
      document.querySelector(".img1").src = "images/dice2.png";
    } else if (randomNumber1 === 3) {
      document.querySelector(".img1").src = "images/dice3.png";
    } else if (randomNumber1 === 4) {
      document.querySelector(".img1").src = "images/dice4.png";
    } else if (randomNumber1 === 5) {
      document.querySelector(".img1").src = "images/dice5.png";
    } else {
      document.querySelector(".img1").src = "images/dice6.png";
    }
  }
  firstRandomNumber();
  // REGENERATE EVERY FEW SECONDS
  // setInterval(firstRandomNumber, 3000);

// RANDOMLY CHANGE SECOND DICE IMAGE
function secondRandomNumber() {
  if (randomNumber2 === 1) {
    document.querySelector(".img2").src = "images/dice1.png";
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
  } else if (randomNumber2 === 5) {
    document.querySelector(".img2").src = "images/dice5.png";
  } else {
    document.querySelector(".img2").src = "images/dice6.png";
  }
}
secondRandomNumber();
// REGENERATE EVERY FEW SECONDS
// setInterval(secondRandomNumber, 3000);

// SHOW WHO WON
function title() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
title();
// REGENERATE EVERY FEW SECONDS
// setInterval(title, 3000);
