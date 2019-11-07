

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1 - 6 random number

var randomDiceImage = "dice" + randomNumber1 + ".png";  // a string from dice1.png - dice6.png use random number to select random dice image

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //change the source attribite for the image element first select element with DOM

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!🥇";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!🥇";
}
else {
  document.querySelector("h1").innerHTML = "DRAW - Roll Again🤔";
}
