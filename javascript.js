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

} else if (playerSelection === "Rock"&& computerSelection === "Scissors" 
 || playerSelection === "Paper" && computerSelection === "Rock" 
 || playerSelection === "Scissors" && computerSelection === "Paper") {
    return playerScore++, `${playerSelection} beats ${computerSelection}. You Win`; 

} else 
    return computerScore++, `${playerSelection} doesn't beat ${computerSelection}. You lose`;
    }



function game() {
    for (let i = 0; i < 5; i++) {

    playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);

    alert(playRound(playerSelection, computerSelection));
   }
}

function gameResult() {
    if (playerScore > computerScore) {
        alert("You won.")
    } else if (playerScore < computerScore) {
        alert("You lose.") 
    } else 
        alert("You tied.")
}

game();
gameResult();



    











  
