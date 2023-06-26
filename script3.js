"use strict";

// Define a player object
let player = {
  playerName: "",
  playerScore: 0,
};

// Function to roll two dice
function rollDice() {
  // TODO: Implement this function
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
