let playerSelection = prompt("weapon?").toLowerCase();
let computerSelection;

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



console.log(computerPlay(computerSelection));
console.log(playerSelection);
