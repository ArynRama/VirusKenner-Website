var timer;
const timeLeft = 15; // seconds
var score_tot = 1;
var score_corect = 0;
// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    $('#playAgainButton').show();
    $('#cloud').hide();
    $('#timer').hide();
    clearInterval(timer);
    if (score_corect / score_tot >= 0.5) {
        $('#end_message2').html("You know quite a bit about HIV.");
        $('#end_message3').html("Keep it up.");
        document.getElementById("end_messages").style.color = "lime";
    } else {
        $('#end_message2').html("You're still learing about HIV.");
        $('#end_message3').html("Keep Learning.");
        document.getElementById("end_messages").style.color = "red";
    }
    $('#end_message1').html(`You have ${score_corect} correct out of ${score_tot}.`);
    $('#end_messages').show();
    // re-show the button, so they can start it again
}

function updateTimer() {
    time = time - 1;
    if (time >= 10){
        $('#time').html(time);
    } else if (time>=0){
        $('#time').html("0" + time);
    } else {
        gameOver();
    }
}

// The button has an on-click event handler that calls this
function start() {
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    time = timeLeft
    timer = setInterval(updateTimer, 1000);

    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();

    // We don't want the to be able to restart the timer while it is running,
    // so hide the button.
    $('#playButton').hide();
    $('#timer').show();
    $('#explination').hide();
    $('#cloud').show();
}
function restart() {
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    time = timeLeft
    timer = setInterval(updateTimer, 1000);

    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();

    // We don't want the to be able to restart the timer while it is running,
    // so hide the button.
    $('#playAgainButton').hide();
    $('#timer').show();
    $('#end_messages').hide();
    $('#cloud').show();
}

function score() {
    score_tot++;
}
function score_cor() {
    score_corect++;
    score_tot++;
}