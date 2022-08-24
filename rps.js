// array holds possible RPS options
const choiceOptions = ['ROCK', 'PAPER', 'SCISSORS'];

// get a random selection from the computer, either Rock Paper or Scissors. 
function getComputerChoice() {
  // pick random string from the length of the choiceOptions array
  const randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
}

// initialize computer and player selections
const computerSelection = '';
const playerSelection = '';
// initialize win/loss counts
let winCount = 0;
let loseCount = 0;

// function that simulates a game with the random computer choice and returns the win/loss result
function playRound(playerSelection, computerSelection) {
  // give computerSelection the computerChoice value for the round
  computerSelection = getComputerChoice();
  // prompt for getting player's selection, making the prompt case insensitive
  playerSelection = prompt('Rock Paper Scissors').toUpperCase();
  // display both selections
  console.log(`You chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = 'It\'s a tie!';
  // if statement block to determine the winner
  if (computerSelection === playerSelection) {
    console.log(tieMessage);
    return tieMessage;
    // win conditions
  } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER' ||
              computerSelection === 'PAPER' && playerSelection === 'SCISSORS' ||
              computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
    console.log(winMessage);
    return winCount++;
    // loss conditions
  } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS' ||
              computerSelection === 'PAPER' && playerSelection === 'ROCK' ||
              computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
    console.log(loseMessage);
    return loseCount++;
  } else {
    // i want to make a cancel message here but idk how
    return;
  }
}

//Five round function called game()
function game() {
// play the playRound function 5 times.
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  // tell the player the results
  console.log('Game Over');
  console.log(`Your score: ${winCount}`);
  console.log(`Computer score: ${loseCount}`);
}

game();