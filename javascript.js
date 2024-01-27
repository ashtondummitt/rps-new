
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {  
    return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} vs. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}\nWe have a tie...`;

}   else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} vs. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}\nYou win this round...`;

}   else if (playerSelection !== "rock" 
&& playerSelection !== "scissors"
&& playerSelection !== "paper") {
    computerScore++;
    return `${playerSelection} is an invalid entry\nYou lose this round...`

}   else 
    computerScore++;
    return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} vs. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}\nYou lose this round...`;
}


function game() {
    for (let i = 0; i < 5; i++) {
    
    const computerSelection = getComputerChoice().toLowerCase();

    let playerSelection = prompt("Choose carefully, or suffer the consequences...","Rock, Paper, or Scissors?").toLowerCase();
  

    alert(playRound(playerSelection, computerSelection));
}

if (playerScore > computerScore) {
    alert(`You won this time...\n\nYour score: ${playerScore} \nComputer score: ${computerScore}`);
} else if (playerScore < computerScore) {
    alert(`You lost. It was all for not.\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
} else {
    alert(`We have a tie. You are stronger than I expected...\n\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
}
let playAgain = confirm("Would you like to play again?");
if (playAgain) {
    location.reload();
} else {
    alert("That's too bad...")
}
}

let confirmGame = confirm("Greetings, would you like to play a game?");
    if (confirmGame) {
        game();
    } else {
        alert("That's too bad...");
    }