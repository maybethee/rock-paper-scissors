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
  } else if (computerSelection === 'ROCK' && playerSelection === 'PAPER' ||
              computerSelection === 'PAPER' && playerSelection === 'SCISSORS' ||
              computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
    console.log(winMessage);
    return winCount++;
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

// code graveyard:

// note: what seems to be wrong when i log this function, is that it takes the first if statement to be true every time, which means i still can't figure out how to properly utilize the returned value of the playRound function as a boolean to make the if statements work as i want.

// inside the above for loop:
  // if ('It\'s a tie! play again?') {
  // // redo iteration
  //   console.log('tie');
  // } else if (`You win! Rock beats ${computerSelection}`) {
  //   // add point to winCount and iterate
  //   console.log('win');
  //   winCount = winCount + 1;
  // } else if (`You lose! ${computerSelection} beats Rock`) {
  //   // add point to loseCount and iterate
  //   console.log('lose');
  //   loseCount = loseCount + 1;
  // } else {
  //   console.log('Game over!');
  // }
  // }