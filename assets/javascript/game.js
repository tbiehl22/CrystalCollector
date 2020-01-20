var wins = 0;
var losses = 0;
var score = 0;

var red = 0;
var blue = 0;
var orange = 0;
var purple = 0;
var randomNumberToMatch = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function()  {

   randomNumberToMatch = getRandomInt(19,120);
   $("#matchingScore").text("Match this score: " + randomNumberToMatch);

   function gameReset() {   
       $("#score").text("Your total score is: " + score);
       randomNumberToMatch = getRandomInt(19,120);
       $("#matchingScore").text("Match this score:  " + randomNumberToMatch);
       score = 0;
       red = 0;
       blue = 0;
       orange = 0;
       purple = 0;
   }

    function checkForTheWin() {
        if (score === randomNumberToMatch) {
        wins++;
        alert("Congratulations! You win!")
        $("#wins").text("Wins: " + wins);
        gameReset();
     }
        else if (score > randomNumberToMatch) {
            losses++;
            alert("You lose! Try again!")
            $("#losses").text("Losses: " + losses);
            gameReset();
        }
     }
        $("#crystal1").on("click", function() {
        if (red === 0) {
         red = getRandomInt(1, 12);
        }
        score += red;
        $("#score").text("Your total score is: " + score);
        checkForTheWin();
    });

    $("#crystal2").on("click", function() {
        if (blue === 0) {
        blue = getRandomInt(1, 12);
        }
        score += blue;
        $("#score").text("Your total score is: " + score);
        checkForTheWin();
    });

    $("#crystal3").on("click", function() {
        if (orange === 0) {
        orange = getRandomInt(1, 12);
        }
        score += orange;
        $("#score").text("Your total score is: " + score);
        checkForTheWin();
    });

    $("#crystal4").on("click", function() {
        if (purple === 0) {
        purple = getRandomInt(1, 12);
        }
        score += purple;
        $("#score").text("Your total score is: " + score);
        checkForTheWin();
    });
});