"use strict";

const displayPlayerScore = document.querySelector(".player-score");
const play = document.querySelector(".play-btn");
displayPlayerScore.textContent = "0";

// Define a player object
let player = {
  playerName: "",
  playerScore: 0,
};

//console.log(player1.winnerstring.call(player));

// Function to roll two dice
function rollDice() {
  //rolling dice
  const dice1 = Math.floor(Math.random() * 6 + 1);

  const dice2 = Math.floor(Math.random() * 6 + 1);

  const diceResults = {
    dice1Result: dice1,
    dice2Result: dice2,
  };
  return diceResults;

  // outcome = dice1 + dice2;
  // console.log(outcome);
}

/////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

// Function to narrate the story
function narrate() {
  const rollDiceResults = rollDice();
  const outcome = rollDiceResults.dice1Result + rollDiceResults.dice2Result;
}

// Function to play a round of the game
function playRound() {
  const rollDiceResults = rollDice();
  const outcome = rollDiceResults.dice1Result + rollDiceResults.dice2Result;

  if (outcome == 7 || outcome == 11) {
    player.playerScore = player.playerScore + 1;
    displayPlayerScore.textContent = player.playerScore;
    console.log("1 point was gained. next part of the game is");
  } else if (outcome === 2 || outcome == 3 || outcome == 12) {
    player.playerScore--;
    displayPlayerScore.textContent = player.playerScore;
    console.log("1 point was lost. next part of the game is");
  } else return;

  console.log("outcome");
  console.log(outcome);
  console.log("total points");
  console.log(player.playerScore);
}

// Decorator function to add a delay to the narrate function
function delayNarration(func, delay) {
  setTimeout(func, delay);

  // TODO: Implement this function
}

// Decorate the narrate function with delayNarration
// let delayedNarrate = delayNarration(narrate, 2000);

////////////////////////////////////////////////////////////////////
//////////////////////implememntation////////////////////////////
///////////////////////////////////////////////////////////////////
//working btn
play.addEventListener("click", () => {
  playRound();
});
