function exampleFunction() {
    alert('You triggered an alert!');
}



function computerPlay (arr){
    const randomWords = Math.floor(Math.random() * arr.length);
    const item = arr[randomWords];
    return item;
}
const stringGames = ['rock', 'paper', 'scissor'];
const result = computerPlay(stringGames);
console.log(result);




function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It is a tie";
      }
  
      //Check for Rock
      if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          return "Player Wins";
        } else {
          return "Computer Wins";
        }
      }
      //Check for Paper
      if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          return "Computer Wins";
        } else {
          return "Player Wins";
        }
      }
      //Check for Scissors
      if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          return "Computer Wins";
        } else {
                  return "Player Wins";
        }
      }
} 



  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));