let computerScore = 0;
let playerScore = 0;

const topSection = document.querySelector('#topSection')
topSection.textContent = "PICK YOUR HANDY WEAPON";

const result = document.querySelector('#result');

const text = document.createElement('div');
text.classList.add('text');
text.textContent = "...";

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
            updateTextContent(text, "It's a tie, you both picked " + playerChoice);
            updateTextContent(topSection, "Computer: " + computerScore + " You: " + playerScore);
        } else if ((computerChoice === "rock" && playerChoice === "scissors") 
                || (computerChoice === "paper" && playerChoice === "rock") 
                || (computerChoice === "scissors" && playerChoice === "paper")) {
            computerScore++;
            updateTextContent(text, "The computer wins this round, " + computerChoice + " beats " + playerChoice);
            updateTextContent(topSection, "Computer: " + computerScore + " You: " + playerScore);
        } else {
            playerScore++;
            updateTextContent(text, "You win this round, " + playerChoice + " beats " + computerChoice);
            updateTextContent(topSection, "Computer: " + computerScore + " You: " + playerScore);
        }
        if (computerScore === 5) {
            updateTextContent(text, "COMPUTER WINS THE GAME! " + computerScore + " to " + playerScore);
            computerScore = 0;
            playerScore = 0;
            updateTextContent(topSection, "YOU LOST THE GAME! PICK A WEAPON TO PLAY AGAIN");
        } else if (playerScore === 5) {
            updateTextContent(text, "YOU WIN THIS GAME! " + playerScore + " to " + computerScore);
            computerScore = 0;
            playerScore = 0;
            updateTextContent(topSection, "YOU WIN! PICK A WEAPON TO PLAY AGAIN");
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


function updateTextContent(section, output) {
    section.textContent = (output);
}
