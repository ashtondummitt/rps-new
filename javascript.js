const playerSelection = prompt("Rock, Paper, or Scissors?")
const computerSelection = getComputerChoice;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}



function game(playerSelection, computerSelection) {
 
}
console.log(getComputerChoice());   
console.log(playerSelection);
console.log(game(playerSelection, computerSelection));