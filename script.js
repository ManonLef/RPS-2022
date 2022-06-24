let computerScore = 0;
let playerScore = 0;

const result = document.querySelector('#result');

const text = document.createElement('div');
text.classList.add('text');

const score = document.createElement('div');
score.classList.add('score');

result.appendChild(text);
result.appendChild(score);

function computerPlay(weaponOptions) {
    weaponOptions = ["rock", "paper", "scissors"];
    return (weaponOptions[Math.floor(Math.random() * weaponOptions.length)]);
}

function playRound(computerChoice, playerChoice) {
        if (computerChoice === playerChoice) {
            text.textContent = "It's a tie, you both picked " + playerChoice;
        } else if ((computerChoice === "rock" && playerChoice === "scissors") 
                || (computerChoice === "paper" && playerChoice === "rock") 
                || (computerChoice === "scissors" && playerChoice === "paper")) {
            computerScore++;
            text.textContent = "computer wins, " + computerChoice + " beats " + playerChoice;
        } else {
            playerScore++;
            text.textContent = "you win, " + playerChoice + " beats " + computerChoice;
        }
        
        score.textContent = "The current score is " + computerScore + " for computer and " + playerScore + " for you.";
        if (computerScore === 5) {
            score.textContent = "Computer wins with " + computerScore + " points against your " + playerScore + " points, pick a weapon to play again.";
            computerScore = 0;
            playerScore = 0;
        } else if (playerScore === 5) {
            score.textContent = "You win with " + playerScore + " points, against " + computerScore + " points for the computer, pick a weapon to play again";
            computerScore = 0;
            playerScore = 0;
        }
} 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        
            playRound(computerSelection, playerSelection);
        
        
    });
});


// function game() {
//     for (let i = 0; i <= 5; i++) {
//         if (i < 5) {
//             let playerSelection = prompt("What will be your weapon of choice?\nRock, Paper or Scissors?").toLowerCase();
//             let computerSelection = computerPlay();

//             if (playerSelection === "rock" 
//                 || playerSelection === "paper" 
//                 || playerSelection === "scissors") {
//                 console.log(playRound(computerSelection, playerSelection));
//             } else {
//                 i--;
//                 console.log( "Pick again, but this time only 'rock', 'paper' or 'scissors'");
//                 continue;
//             }
//         } else {
//             if (computerScore > playerScore) {
//                 console.log("You lost, Computer score is " + computerScore + " You scored " + playerScore)
//             } else {
//                 console.log("You win, Computer score is " + computerScore + " You scored " + playerScore)
//             }
//         }
//     }
// }

// game();

