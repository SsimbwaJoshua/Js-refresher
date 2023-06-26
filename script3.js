"use strict";

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

  const randomNumber = dice1 + dice2;
  console.log(randomNumber);
  return randomNumber;
}

// Function to narrate the story
function narrate(outcome) {
  // TODO: Implement this function
}

// Function to play a round of the game
function playRound(player) {
  // TODO: Implement this function
}

// Decorator function to add a delay to the narrate function
function delayNarration(func, delay) {
  // TODO: Implement this function
}

// Decorate the narrate function with delayNarration
let delayedNarrate = delayNarration(narrate, 2000);

////////////////////////////////////////////////////////////////////
//////////////////////implememntation////////////////////////////
///////////////////////////////////////////////////////////////////

rollDice();
