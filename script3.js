"use strict";

//display related

const displayPlayerScore = document.querySelector(".player-score");
const play = document.querySelector(".play-btn");
displayPlayerScore.textContent = "0";

//////////////////////////////////////////////////////////////////////////////////

// Define a player object
let player = {
  playerName: "",
  playerScore: 0,
};

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
}

/////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////

// Function to narrate the story
function narrate(outcome) {
  if (outcome == 7 || outcome == 11) {
    console.log("You win. your free to take a shot");
  } else if (outcome === 2 || outcome == 3 || outcome == 12) {
    console.log("you lose. make 10 push ups");
  } else return;
}

// Function to play a round of the game
function playRound() {
  const rollDiceResults = rollDice();
  const outcome = rollDiceResults.dice1Result + rollDiceResults.dice2Result;

  narrate(outcome);

  if (outcome == 7 || outcome == 11) {
    player.playerScore = player.playerScore + 1;
    displayPlayerScore.textContent = player.playerScore;
  } else if (outcome === 2 || outcome == 3 || outcome == 12) {
    player.playerScore--;
    displayPlayerScore.textContent = player.playerScore;
  } else return;
}

// Decorator function to add a delay to the narrate function
function delayNarration(func, delay) {
  return function () {
    setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Decorate the narrate function with delayNarration
let delayedNarrate = delayNarration(narrate, 2000);

////////////////////////////////////////////////////////////////////
//////////////////////implememntation////////////////////////////
///////////////////////////////////////////////////////////////////
//working btn
play.addEventListener("click", () => {
  playRound();
});
