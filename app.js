let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Decides the CPU's move based on a random number.
function getCpuChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, cpu) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = `(YOU) ${convertToWord(user)} beats (CPU) ${convertToWord(cpu)}. You win!`;
}

function lose(user, cpu) {
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = `(YOU) ${convertToWord(user)} lose to (CPU) ${convertToWord(cpu)}. You lost!`;
}

function draw(user, cpu) {
    result_div.innerHTML = `(YOU) ${convertToWord(user)} draw against (CPU) ${convertToWord(cpu)}. You drew!`;
}

// Handles game logic.
function game(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, cpuChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, cpuChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, cpuChoice);
            break;
    }
}

// Returns the value of the choice the user has clicked.
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();