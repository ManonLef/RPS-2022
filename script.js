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
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log(computerSelection);
        console.log(playerSelection);
        if (computerChoice === playerChoice) {
            return "it's a tie, you both picked " + playerChoice;
        } else if ((computerChoice === "rock" && playerChoice === "scissors") 
                || (computerChoice === "paper" && playerChoice === "rock") 
                || (computerChoice === "scissors" && playerChoice === "paper")) {
            return "computer wins, " + computerChoice + " beats " + playerChoice;
        } else {
            return "you win, " + playerChoice + " beats " + computerChoice;
        }       
    } else {
        return "Pick again, but this time only 'rock, 'paper' or 'scissors'";
        //In the loop this option should start a new playerSelection prompt.
    }
}
console.log(playRound(computerSelection, playerSelection));
