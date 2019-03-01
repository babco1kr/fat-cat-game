// Variables declared for use in functions
var computerNumber;
var randomNumber;
var userScore;
var crystalOneValue;
var crystalTwoValue;
var crystalThreeValue;
var crystalFourValue;

$(document).ready(function () {
    setup();
});

function setup () {
    userScore = 0;
    randomComputerGuess();
    crystalOne();
    crystalTwo();
    crystalThree();
    crystalFour();

}

$("#crystalOne").on("click", function () {
    userScore += crystalOneValue;
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalTwo").on("click", function () {
    userScore += crystalTwoValue;
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalThree").on("click", function () {
    userScore += crystalThreeValue;
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalFour").on("click", function () {
    userScore += crystalFourValue;
    $("#userNumber").text(userScore);
    return userScore;
});

function randomComputerGuess () {
    computerNumber = Math.floor(Math.random()*151);
    $("#numberToMatch").text(computerNumber);
    console.log(computerNumber);
}


function random () {
    randomNumber = Math.floor(Math.random()*25);
    return randomNumber;
}

// function addingScore (x) {
//     userScore += x;
//     $("#userNumber").text(userScore);
//     return userScore;
// }

function crystalOne () {
    random();
    crystalOneValue = randomNumber;
    return crystalOneValue;
}

function crystalTwo () {
    random();
    crystalTwoValue = randomNumber;
    return crystalTwoValue;
}

function crystalThree () {
    random();
    crystalThreeValue = randomNumber;
    return crystalThreeValue;
}

function crystalFour () {
    random();
    crystalFourValue = randomNumber;
    return crystalFourValue;
}