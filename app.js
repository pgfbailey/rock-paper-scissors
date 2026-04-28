let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

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
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = `(YOU) ${convertToWord(user)} beats (CPU) ${convertToWord(cpu)}. You win!`;
    user_div.classList.add('green-glow');
    setTimeout(() => user_div.classList.remove('green-glow'), 500);
}

function lose(user, cpu) {
    const user_div = document.getElementById(user);
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_div.innerHTML = `(YOU) ${convertToWord(user)} lose to (CPU) ${convertToWord(cpu)}. You lost!`;
    user_div.classList.add('red-glow');
    setTimeout(() => user_div.classList.remove('red-glow'), 500);
}

function draw(user, cpu) {
    const user_div = document.getElementById(user);
    result_div.innerHTML = `(YOU) ${convertToWord(user)} draw against (CPU) ${convertToWord(cpu)}. You drew!`;
    user_div.classList.add('orange-glow');
    setTimeout(() => user_div.classList.remove('orange-glow'), 500);
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
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();