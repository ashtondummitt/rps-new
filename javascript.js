let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}




function playRound(playerSelection, computerSelection) {
    
if (playerSelection === computerSelection) {  
    return `${playerSelection} vs. ${computerSelection}. You Tied`;

} else if (playerSelection === "Rock" && computerSelection === "Scissors" 
 || playerSelection === "Paper" && computerSelection === "Rock" 
 || playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return `${playerSelection} beats ${computerSelection}. You Win`;

} else 
    computerScore++;
    return `${playerSelection} doesn't beat ${computerSelection}. You lose`;
    }




function game() {
    for (let i = 0; i < 5; i++) {
    
    const computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?");
    
    
    alert(playRound(playerSelection, computerSelection));

}




}




game();


if (playerScore > computerScore) {
    alert(`You won. Your score = ${playerScore} Computer score = ${computerScore}`);
} else if (playerScore < computerScore) {
    alert(`You lose. Your score = ${playerScore} Computer score = ${computerScore}`);
} else {
    alert(`You tied. Your score = ${playerScore} Computer score = ${computerScore}`);
}
