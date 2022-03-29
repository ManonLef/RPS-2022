let computerScore = 0;
let playerScore = 0;

alert("cancel the first weapon prompt, open console and refresh to play");

function computerPlay(weaponOptions) {
    weaponOptions = ["rock", "paper", "scissors"];
    return (weaponOptions[Math.floor(Math.random() * weaponOptions.length)]);
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "it's a tie, you both picked " + playerChoice;
    } else if ((computerChoice === "rock" && playerChoice === "scissors") 
            || (computerChoice === "paper" && playerChoice === "rock") 
            || (computerChoice === "scissors" && playerChoice === "paper")) {
        computerScore++;
        return "computer wins, " + computerChoice + " beats " + playerChoice;
    } else {
        playerScore++;
        return "you win, " + playerChoice + " beats " + computerChoice;
    }       
} 


function game() {
    for (let i = 0; i <= 5; i++) {
        if (i < 5) {
            let playerSelection = prompt("What will be your weapon of choice?\nRock, Paper or Scissors?").toLowerCase();
            let computerSelection = computerPlay();

            if (playerSelection === "rock" 
                || playerSelection === "paper" 
                || playerSelection === "scissors") {
                console.log(playRound(computerSelection, playerSelection));
            } else {
                i--;
                console.log( "Pick again, but this time only 'rock', 'paper' or 'scissors'");
                continue;
            }
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

