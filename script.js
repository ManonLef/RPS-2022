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

function playRound(computerChoice, playerChoice) {
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerChoice === playerChoice) {
        return "it's a tie, you both picked " + playerChoice;
    } else if ((computerChoice === "rock" && playerChoice === "scissors") 
            || (computerChoice === "paper" && playerChoice === "rock") 
            || (computerChoice === "scissors" && playerChoice === "paper")) {
        return "computer wins, " + computerChoice + " beats " + playerChoice;
    } else {
        return "player wins";
    }       
}

console.log(playRound(computerSelection, playerSelection));
