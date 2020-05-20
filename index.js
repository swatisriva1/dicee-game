randomNumber1 = Math.floor((Math.random() * 6)) + 1;
p1Dice = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", p1Dice);

randomNumber2 = Math.floor((Math.random() * 6)) + 1;
p2Dice = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", p2Dice);

var newHeading = "";
if(randomNumber1 > randomNumber2) {
    newHeading = "🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    newHeading = "Player 2 Wins! 🚩";
}
else {
    newHeading = "Draw!";
}
document.querySelector("h1").textContent = newHeading;
document.querySelector("h1").classList.add("play-result");
