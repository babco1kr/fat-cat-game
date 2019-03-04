// Variables declared for use in functions
var computerNumber;
var randomNumber;
var userScore = 0;
var winCount = 0;
var loseCount = 0;
var imageWeapon;
var imageArray = ["assets/images/pizza.png", "assets/images/burger.png", "assets/images/fries.png", "assets/images/icecream.png"];

$(document).ready(function () {

    // Start of the game that puts images on screen and assigns them their number value
    for (i = 0; i < imageArray.length; i++){
        imageWeapon = $("<img>");
        imageWeapon.addClass("weapon-image img-thumbnail");
        imageWeapon.addClass("weaponImage" + [i]);
        randomNumber = Math.floor((Math.random()*12) + 1);
        imageWeapon.attr({"src":imageArray[i], "weaponValueNum":randomNumber, height: "190px", width: "190px" });
        $(".weapons"+[i]).append(imageWeapon);
    }
    randomComputerGuess();

    // Adds number of picture clicked to user score and animates image on click
    $(".weapon-image").on("click", function () {
        $("#winOrLose").text("");
        var weaponValue = ($(this).attr("weaponValueNum"));
        weaponValue = parseInt(weaponValue);
        userScore += weaponValue;
        $("#userNumber").text(userScore + "lbs");
        $(this).animate({opacity: "0.4"}, "fast");
        $(this).animate({opacity: "1"}, "fast");
        $("#catimage").animate({height: "+=25px", width: "+=25px"}, "fast");
        $("#catimage").animate({height: "-=25px", width: "-=25px"}, "fast");
        check(userScore);

    });

    // function resets the value of images
    function reset () {
        for (i = 0; i < imageArray.length; i++) {
            randomNumber = Math.floor((Math.random()*12) + 1);
            $(".weaponImage"+[i]).attr("weaponValueNum", randomNumber);
        }
        userScore = 0;
        $("#userNumber").text(userScore);
        randomComputerGuess();
    }

    // Checks if the user has matched the computer number or if they have gone over
    function check (x) {
        if (x === computerNumber) {
            $("#winOrLose").text("You Win!");
            winCount++;
            $("#winCount").text("Wins: " + winCount);
            reset();
        }
        else if (x > computerNumber) {
            $("#winOrLose").text("You Lose, Try Again!");
            loseCount++;
            $("#loseCount").text("Loses: " + loseCount);
            reset();
        }
    }

    // Chooses random computer number for the game
    function randomComputerGuess () {
        var min = 19;
        var max = 120;
        computerNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
        $("#numberToMatch").text(computerNumber + "lbs");
    }

});