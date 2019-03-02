// Variables declared for use in functions
var computerNumber;
var randomNumber;
var userScore = 0;
var winCount = 0;
var imageWeapon;
var imageArray = ["assets/images/pizza.png", "assets/images/burger.png", "assets/images/fries.png", "assets/images/icecream.png"];

$(document).ready(function () {

    for (i = 0; i < imageArray.length; i++){
        imageWeapon = $("<img>");
        imageWeapon.addClass("img-thumbnail weapon-image");
        imageWeapon.addClass("weaponImage" + [i]);
        randomNumber = Math.floor((Math.random()*11) + 1);
        imageWeapon.attr({"src":imageArray[i], "weaponValueNum":randomNumber});
        $(".weapons"+[i]).append(imageWeapon);
    }
    randomComputerGuess();

    $(".weapon-image").on("click", function () {
        $("#winOrLose").text("");
        var weaponValue = ($(this).attr("weaponValueNum"));
        weaponValue = parseInt(weaponValue);
        userScore += weaponValue;
        $("#userNumber").text(userScore + "lbs");
        check(userScore);

    })

    // function resets the value of images
    function reset () {
        for (i = 0; i < imageArray.length; i++) {
            randomNumber = Math.floor((Math.random()*11) + 1);
            $(".weaponImage"+[i]).attr("weaponValueNum", randomNumber);
        }
        userScore = 0;
        $("#userNumber").text(userScore);
        randomComputerGuess();
    }

    function check (x) {
        if (x === computerNumber) {
            $("#winOrLose").text("You Win!");
            winCount++;
            $("#winCount").text("Wins: " + winCount);
            reset();
        }
        else if (x > computerNumber) {
            $("#winOrLose").text("You Lose, Try Again!");
            reset();
        }
    }

    function randomComputerGuess () {
        var min = 19;
        var max = 120;
        computerNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
        $("#numberToMatch").text(computerNumber + "lbs");
    }

});