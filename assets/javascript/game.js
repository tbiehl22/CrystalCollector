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

$(document).ready(function() {

   randomNumberToMatch = getRandomInt(19,120);
   console.log("Random Number", randomNumberToMatch);
   $("#matchingScore").text("Match this score:" + randomNumberToMatch);

   function gameReset() {
       score = 0;
       $("#score").text("Your total score is: " + score);
       randomNumberToMatch = getRandomInt(19,120);
       console.log("Random Number", randomNumberToMatch);
       $("matchingScore").text("Match this score: " + randomNumberToMatch);
       red = 0;
       blue = 0;
       orange = 0;
       purple = 0;
   }
})

function checkForTheWin() {
    if (score === randomNumberToMatch) {
        wins++;
        $("#wins").text("Wins: " + wins);
        gameReset();
    }
    else if (score > randomNumberToMatch) {
        losses++;
        $("#losses").text("Losses: " + losses);
        gameReset();
    }
}
