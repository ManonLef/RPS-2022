let playerSelection = prompt("weapon?").toLowerCase();
let computerSelection = computerPlay();

function computerPlay() {
    let random = Math.floor(Math.random()*3)+1;
    
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computer, player) {
    console.log(computerSelection);
    console.log(playerSelection);
    if (computer === player) {
        return "it's a tie";
    } else if ((computer === "rock" && player === "scissors") 
            || (computer === "paper" && player === "rock") 
            || (computer === "scissors" && player === "paper")) {
        return "computer wins";
    } else {
        return "player wins";
    }       
}

console.log(playRound(computerSelection, playerSelection));
