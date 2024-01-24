
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}


function playRound(playerSelection, computerSelection) {
  
if (playerSelection === computerSelection) {  
        return "You Tied";

} else if (playerSelection === "Rock"&& computerSelection === "Scissors" 
 || playerSelection === "Paper" && computerSelection === "Rock" 
 || playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win";

} else if (playerSelection === "Rock"&& computerSelection === "Paper" 
|| playerSelection === "Paper" && computerSelection === "Scissors" 
|| playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose";

} 
};










//const playerSelection = prompt("Rock, Paper, or Scissors?");
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);   
