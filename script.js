"use strict";

//_________________________________________________________________
//01-guess number in the rendom range betweeen 1 to 20
//02-when the user guess the number it will show in the message box
//03-chaing type start guessing for two types frist -when user guess fault second - when the user guessing correct
//04-when user press on the btn check if answer is correct will be show the guess number else the score -1 point after tring this when get the number
//05-when user press on the btn again will be reset the game and the score and the number
//________________________________________________________________

//____________ Guess Number________________
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

console.log(randomNum);

//____Show the corract guess number___________
const displayMessage = function (massage) {
    document.querySelector(".type-game").textContent = massage;
};

//_____User click on the check and the check game_______________
document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof (guess), guess);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === randomNum) {
        displayMessage('🎉 Correct Number!');
        document.querySelector(".number").textContent = randomNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore-number').textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > randomNum ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score-number').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector("body").style.backgroundColor = "#FF0000";
            document.querySelector('.score-number').textContent = 0;
        }
    }
});
//______Reset Game _______________________
document.querySelector('.reset').addEventListener('click', function () {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score-number").textContent = score;
    document.querySelector(".guess").value = '';
    document.querySelector(".type-game").textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

