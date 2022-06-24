let computerScore = 0;
let playerScore = 0;

const topSection = document.querySelector('#topSection')
topSection.textContent = "PICK YOUR WEAPON OF CHOICE";

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
            topSection.textContent = "It's a tie, you both picked " + playerChoice;
        } else if ((computerChoice === "rock" && playerChoice === "scissors") 
                || (computerChoice === "paper" && playerChoice === "rock") 
                || (computerChoice === "scissors" && playerChoice === "paper")) {
            computerScore++;
            topSection.textContent = "computer wins, " + computerChoice + " beats " + playerChoice;
        } else {
            playerScore++;
            topSection.textContent = "you win, " + playerChoice + " beats " + computerChoice;
        }
        
        score.textContent = "The current score is " + computerScore + " for computer and " + playerScore + " for you.";
        if (computerScore === 5) {
            topSection.textContent = "COMPUTER WINS! " + computerScore + " to " + playerScore + " pick a weapon to play again";
            computerScore = 0;
            playerScore = 0;
        } else if (playerScore === 5) {
            topSection.textContent = "YOU WIN! " + playerScore + " to " + computerScore + " pick a weapon to play again";
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


