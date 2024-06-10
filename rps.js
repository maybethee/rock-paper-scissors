// array holds possible RPS options
const choiceOptions = ['ROCK', 'PAPER', 'SCISSORS'];

// get a random selection from the computer, either Rock Paper or Scissors. 
function getComputerChoice() {
  // pick random string from the length of the choiceOptions array
  const randomChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
  return randomChoice;
}

// initialize win/loss counts
let winCount = 0;
let loseCount = 0;

// accesses buttons
const btns = document.querySelectorAll('.btns');
btns.forEach(btn => {
  // give playerSelection the button's value
  getPlayerChoice = btn.addEventListener("click", function (e) {
    return playerSelection = e.target.id;
  });
    
  // calls the playToFive function on click
  btn.addEventListener('click', function playToFive(getPlayerChoice, computerSelection) {

    // give computerSelection the computerChoice value for the round
    computerSelection = getComputerChoice();
    getPlayerChoice;

    // display messages
    const winMessage = `Round win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `Round lose! ${computerSelection} beats ${playerSelection}`;
    const tieMessage = 'It\'s a tie!';
    
    // set condition for game to be played until 5 points
    if (winCount != 5 && loseCount != 5) {
      // tie condition
      if (computerSelection === playerSelection) {
        // display result messages with current score
        msg1.innerHTML = 
          `You chose: ${playerSelection}<br/> 
          Computer chose: ${computerSelection}`;
        resultMessage.innerHTML = 
          `${tieMessage}<br/>
          Your score: ${winCount}<br/>
          Computer score: ${loseCount}`;
        return tieMessage;
      } else if 
          // win conditions
          (computerSelection === 'ROCK' && playerSelection === 'PAPER' ||
          computerSelection === 'PAPER' && playerSelection === 'SCISSORS' ||
          computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
          // adds point to player
          winCount++;
          // checks if the game is over to display end game results
          if (winCount === 5) {
            gameOver(winCount, loseCount);
          } else {
              // display result messages with current score
              msg1.innerHTML = 
                `You chose: ${playerSelection}<br/> 
                Computer chose: ${computerSelection}`;
              resultMessage.innerHTML = 
              `${winMessage}<br/>
                Your score: ${winCount}<br/>
                Computer score: ${loseCount}`;
            return winCount;
          }
      } else if 
          // loss conditions
          (computerSelection === 'ROCK' && playerSelection === 'SCISSORS' ||
          computerSelection === 'PAPER' && playerSelection === 'ROCK' ||
          computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
          // adds point to computer
          loseCount++;
          // checks if the game is over to display end game results
          if (loseCount === 5) {
            gameOver(winCount, loseCount);
          } else {
          // display result messages with current score
          msg1.innerHTML = 
            `You chose: ${playerSelection} <br/> 
            Computer chose: ${computerSelection}`;
          resultMessage.innerHTML = 
            `${loseMessage}<br/>
            Your score: ${winCount}<br/>
            Computer score: ${loseCount}`;
        return loseCount;
        }
      }
    }
  });
});

// displays game over messages when 5 points are reached
function gameOver(winCount, loseCount) {
  // checks if player had more points than computer
  if (winCount > loseCount) {
    // display win message
    resultMessage.innerHTML = 
      `Game Over<br/>
      Your score: ${winCount}<br/>
      Computer score: ${loseCount}<br/>
      You win!!!`;
  } else {
    // display loss message
    resultMessage.innerHTML = 
      `Game Over<br/>
      Computer score: ${loseCount}<br/>
      Your score: ${winCount}<br/>
      You lose :(`;
  }
}

const resultMessage = document.querySelector('#resultMsg');

const resultDiv = document.querySelectorAll('.results');
resultDiv.forEach(result => {
  result.style.margin = '10px 0px 10px 10px';
  result.style.padding = '10px';
  result.style.backgroundColor = 'grey';
  result.style.color = 'lime';
  result.style.fontSize = '48px';
  result.style.border = 'solid pink';
  result.style.maxWidth = '800px';
  result.style.textAlign = 'center';
  result.style.borderRadius = '20px';

});

btns.forEach(btn => {
  btn.style.marginBottom = '40px';
  btn.style.padding = '50px 80px';
  btn.style.fontSize = '40px';
  btn.style.color = 'dark purple';
  btn.style.backgroundColor = 'magenta';
  btn.style.borderRadius = '20px';
})

