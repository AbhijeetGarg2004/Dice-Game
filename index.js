var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";

var randomSource1 = "./images/" + randomImage1;
var randomSource2 = "./images/" + randomImage2;

var image1 = document.querySelector("img.img1");
var image2 = document.querySelector("img.img2");

image1.setAttribute("src",randomSource1);
image2.setAttribute("src",randomSource2);