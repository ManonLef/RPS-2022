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

function playRound(comp, play) {
    console.log(computerSelection);
    console.log(playerSelection);
    if (comp === play) {
        return("it's a tie");
    } else if ((comp === "rock" && play === "scissors") || (comp === "paper" && play === "rock") || (comp === "scissors" && play === "paper")) {
        return("computer wins");
    } else {
        return("player wins");
    }
        
}

console.log(playRound(computerSelection, playerSelection));
