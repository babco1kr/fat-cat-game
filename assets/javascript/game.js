// Variables declared for use in functions
var computerNumber;
var randomNumber;
var userScore;
var crystalOneValue;
var crystalTwoValue;
var crystalThreeValue;
var crystalFourValue;
var winCount = 0;

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

    console.log(crystalOneValue);
    console.log(crystalTwoValue);
    console.log(crystalThreeValue);
    console.log(crystalFourValue);
}

$("#crystalOne").on("click", function () {
    userScore += crystalOneValue;
    check(userScore);
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalTwo").on("click", function () {
    userScore += crystalTwoValue;
    check(userScore);
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalThree").on("click", function () {
    userScore += crystalThreeValue;
    check(userScore);
    $("#userNumber").text(userScore);
    return userScore;
});

$("#crystalFour").on("click", function () {
    userScore += crystalFourValue;
    check(userScore);
    $("#userNumber").text(userScore);
    return userScore;
});

function randomComputerGuess () {
    var min = 19;
    var max = 120;
    computerNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
    $("#numberToMatch").text(computerNumber);
}


function random () {
    randomNumber = Math.floor(Math.random()*((12-1)) + 1);
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

function check (x) {
    if (x === computerNumber) {
        $("#win").text("You Win!");
        winCount++;
        $("#winCount").text(winCount);
        setup();
    }
    else if (x > computerNumber) {
        alert("You lose");
        setup();
    }
}