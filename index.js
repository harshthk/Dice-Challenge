// genrating random value for player1
var randomNumber = Math.floor(Math.random()*6)+1;
var randomImage = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

// generating random value for player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// player 1 or player 2 win

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win"
}else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}

