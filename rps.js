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



function getComputerChoice() {
  return randomChoice;
}
// get a random selection from the computer, either Rock Paper or Scissors. 
const choiceOptions = ['Rock', 'Paper', 'Scissors'];
const randomChoice = choiceOptions[Math.floor(Math.random() * 3)];
console.log(randomChoice);
