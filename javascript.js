
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {  
    return `${playerSelection} vs. ${computerSelection}.\nWe have a tie...`;

}   else if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return `${playerSelection} vs. ${computerSelection}.\nYou win this round...`;

}   else 
    computerScore++;
    return `${playerSelection} vs. ${computerSelection}.\nYou lose this round...`;
    }

let welcomeToGame = confirm("Greetings, would you like to play a game?");
    if (welcomeToGame) {
        game();
    }
    else {
        alert("That's too bad...");
    }

function game() {
    for (let i = 0; i < 5; i++) {
    
    const computerSelection = getComputerChoice();
    playerSelection = prompt("Choose carefully, or suffer the consequences...","Rock, Paper, or Scissors?");
    
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
