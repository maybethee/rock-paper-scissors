//   
//    take the string values and determine which is the winner (??how??)
//       write out all possibilites as if statements? if (rock, scissors || scissors, paper || paper, rock) then you win, $playerSelection beats $computerSelection etc.
// 
//    ensure the user's input is case-insensitive
// take these two values and evaluate which side is the winner based on canonical rock paper scissors rules
// display a message that declares the winner of the round ("You Lose! Paper beats Rock")
// save (return) the value of the results
// create a new 5-round version of the game
// after each round, report which side won and lost, and record this information to determine which side is the winner and loser at the end
// loop to the next round until 5 rounds are over
// display who won with how many points


const choiceOptions = ['Rock', 'Paper', 'Scissors'];
// get a random selection from the computer, either Rock Paper or Scissors. 
function getComputerChoice() {
  const randomChoice = choiceOptions[Math.floor(Math.random() * 3)];
  return randomChoice;
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
const winMessage = `You win! Rock beats ${computerSelection}`
const tieMessage = 'It\'s a tie! play again?'
const loseMessage = `You lose! ${computerSelection} beats Rock`
// function that simulates a game with the random computer choice and returns the win/loss result
function playRound(playerSelection, computerSelection) {
  if (computerSelection === 'Scissors') {
    return winMessage;
  }
  else if (computerSelection === 'Rock') {
    return tieMessage;
  }
  else {
    return loseMessage;
  }
}

console.log(playRound(playerSelection, computerSelection));


