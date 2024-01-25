
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}



function playRound(playerSelection, computerSelection) {
  
if (playerSelection === computerSelection) {  
        alert("You Tied");

} else if (playerSelection === "Rock"&& computerSelection === "Scissors" 
 || playerSelection === "Paper" && computerSelection === "Rock" 
 || playerSelection === "Scissors" && computerSelection === "Paper") {
    alert("You Win");

} else if (playerSelection === "Rock"&& computerSelection === "Paper" 
|| playerSelection === "Paper" && computerSelection === "Scissors" 
|| playerSelection === "Scissors" && computerSelection === "Rock") {
    alert("You lose");
}
}


function game() {

    for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, or Scissors?");

    playRound(playerSelection, computerSelection);
    }  
}



game();



    











  
