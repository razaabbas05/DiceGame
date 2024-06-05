window.onload = function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDice1 = "images/dice" + randomNumber1 + ".png";
    var randomDice2 = "images/dice" + randomNumber2 + ".png";

    var diceImages = document.querySelectorAll("img");

    diceImages.forEach(img=> {
        img.style.animation = 'none';
        img.offsetHeight;
        img.style.animation = null;
    });

    diceImages[0].setAttribute("src", randomDice1);
    diceImages[1].setAttribute("src", randomDice2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}