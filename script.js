let computerScore = 0;
let playerScore = 0;

alert("cancel the first weapon prompt, open console and refresh to play");

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
        if (computerChoice === playerChoice) {
            return "it's a tie, you both picked " + playerChoice;
        } else if ((computerChoice === "rock" && playerChoice === "scissors") 
                || (computerChoice === "paper" && playerChoice === "rock") 
                || (computerChoice === "scissors" && playerChoice === "paper")) {
            ++computerScore
            return "computer wins, " + computerChoice + " beats " + playerChoice;
        } else {
            ++playerScore
            return "you win, " + playerChoice + " beats " + computerChoice;
        }       
    } else {
        return "Pick again, but this time only 'rock, 'paper' or 'scissors'";
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        if (i < 5) {
            let playerSelection = prompt("weapon?").toLowerCase();
            let computerSelection = computerPlay();
            console.log(playRound(computerSelection, playerSelection));
        } else {
            if (computerScore > playerScore) {
                console.log("You lost, Computer score is " + computerScore + " You scored " + playerScore)
            } else {
                console.log("You win, Computer score is " + computerScore + " You scored " + playerScore)
            }
        }
    }
}

game();

