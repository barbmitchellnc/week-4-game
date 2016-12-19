/* Declare variables for the game */
var NumberToGuess = 0;
var NumberTotal = 0;
var Blue = 0;
var Green = 0;
var Purple = 0;
var Red = 0;
var win = 0;
var loss = 0;

function restart() {
    /*Generate Randowm Numbers each crystal and total*/
    NumberToGuess = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    Blue = Math.floor((Math.random() * 12) + 1);
    $("#blue").attr("value", Blue);
    Green = Math.floor((Math.random() * 12) + 1);
    $("#green").attr("value", Green);
    Purple = Math.floor((Math.random() * 12) + 1);
    $("#purple").attr("value", Purple);
    Red = Math.floor((Math.random() * 12) + 1);
    $("#red").attr("value", Red);
    $("#random").html(NumberToGuess);
    NumberTotal = 0;
    $("#totalscore").html(0);
}



function buttonClicked(obj) {
    NumberTotal = NumberTotal + Number($(obj).attr("value"));


    /* Compare the number total to the number guess determine the status of game*/
    if (NumberTotal == NumberToGuess) {
        $("#outcome").html("<h3> You Win!! </h3>");
        win++;
        console.log(win);
        $("#wins").html(win);

        restart();

    } else if (NumberTotal > NumberToGuess) {
        $("#outcome").html("<h3> Sorry!Try again </h3>");
        loss++;
        console.log(loss);
        console.log("#outcome");
        $("#losses").html(loss);
        restart();
    } else {
        $("#totalscore").html("Total Score = " + NumberTotal);
    }
}
$(document).ready(function() {
    restart(); /*Assign value to each click of button*/
    $("#blue").on("click", function() {
        buttonClicked(this);
    });
    $("#green").on("click", function() {
        buttonClicked(this);
    });
    $("#purple").on("click", function() {
        buttonClicked(this);
    });
    $("#red").on("click", function() {
        buttonClicked(this);
    });
});
