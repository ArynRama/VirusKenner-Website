var timer;
const timeLeft = 15; // seconds
var score_tot = 1;
var score_corect = 0;
const facts = [
    "Cap HIV reproduces outside the human body.",
    "Cap HIV can be contracted through air.",
    "Cap Once you are infected with HIV, you will definitely get aids.",
    "Cap HIV can be passed on from one person to another by shaking hands.",
    "Cap There is a cure for HIV.",
    "Fact HIV stands for Human Immunodeficiency Virus.",
    "Fact AIDS is the last stage of HIV.",
    "Fact 1.4 percent of the population in Suriname has HIV.",
    "Fact There is no vaccine to prevent HIV .",
    "Fact You can have HIV and not know it.",
    "Fact You can contract HIV through a blood transfusion.",
];

function gameOver() {
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
    $('#factorcap').hide();
    $('#Cap, #Fact').hide();
}

function updateTimer() {
    time = time - 1;
    if (time >= 10) {
        $('#time').html(time);
    } else if (time >= 0) {
        $('#time').html("0" + time);
    } else {
        gameOver();
    }
}
function prompts() {
    const index = Math.floor(Math.random() * prompts_list.length);
    var prompt = prompts_list[index];
    var fact = document.getElementById("Fact");
    var cap = document.getElementById("Cap");
    if (prompt != undefined) {
        if (prompt.startsWith("Fact ")) {
            prompt = prompt.replace("Fact ", "");
            fact.setAttribute("onclick", "score_cor()");
            cap.setAttribute("onclick", "score()");
            prompts_list.splice(index, 1);
            document.getElementById("prompt").innerHTML = prompt;
        } else {
            prompt = prompt.replace("Cap ", "");
            cap.setAttribute("onclick", "score_cor()");
            fact.setAttribute("onclick", "score()");
            prompts_list.splice(index, 1);
            document.getElementById("prompt").innerHTML = prompt;
        };
    } else if (typeof prompt == "undefined") {
        prompts_list = facts;
        if (prompt.startsWith("Fact ")) {
            prompt = prompt.replace("Fact ", "");
            fact.setAttribute("onclick", "score_cor()");
            cap.setAttribute("onclick", "score()");
            prompts_list.splice(index, 1);
            document.getElementById("prompt").innerHTML = prompt;
        } else {
            prompt = prompt.replace("Cap ", "");
            cap.setAttribute("onclick", "score_cor()");
            fact.setAttribute("onclick", "score()");
            prompts_list.splice(index, 1);
            document.getElementById("prompt").innerHTML = prompt;
        };
    };
}
function start() {
    timer = setInterval(updateTimer, 1000);
    time = timeLeft;
    prompts_list = facts;
    updateTimer()
    $('#playButton').hide();
    $('#timer').show();
    $('#explination').hide();
    $('#cloud').show();
    $('#factorcap').show();
    prompts();
    $('#Cap, #Fact').show();
}
function restart() {
    time = timeLeft;
    prompts_list = [
        "Cap HIV reproduces outside the human body.",
        "Cap HIV can be contracted through air.",
        "Cap Once you are infected with HIV, you will definitely get aids.",
        "Cap HIV can be passed on from one person to another by shaking hands.",
        "Cap There is a cure for HIV.",
        "Fact HIV stands for Human Immunodeficiency Virus.",
        "Fact AIDS is the last stage of HIV.",
        "Fact 1.4 percent of the population in Suriname has HIV.",
        "Fact There is no vaccine to prevent HIV .",
        "Fact You can have HIV and not know it.",
        "Fact You can contract HIV through a blood transfusion.",
    ];
    score_corect = 0;
    score_tot = 1;
    timer = setInterval(updateTimer, 1000);
    updateTimer();
    prompts();
    $('#playAgainButton').hide();
    $('#timer').show();
    $('#end_messages').hide();
    $('#cloud').show();
    $('#factorcap').show();
    $('#Cap, #Fact').show();
}

function score() {
    if (score_tot == 11) {
        gameOver();
    } else {
        score_tot++;
        prompts();
    }
};
function score_cor() {
    if (score_tot == 11) {
        gameOver();
    } else {
        score_corect++;
        score_tot++;
        prompts();
    }
};