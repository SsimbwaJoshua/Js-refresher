"use strict";

const displayPlayerScore = document.querySelector(".player-score");
const play = document.querySelector(".play-btn");
displayPlayerScore.textContent = "0";

// Define a player object
let player = {
  playerName: "",
  playerScore: 0,
};

//call method
// const player1 = {
//   winnerstring: function () {
//     return `Hei, ${this.name} ,you gained a total of ${this.playerScore}`;
//   },
// };

//console.log(player1.winnerstring.call(player));

// Function to roll two dice
function rollDice() {
  //rolling dice
  const dice1 = Math.floor(Math.random() * 6 + 1);

  const dice2 = Math.floor(Math.random() * 6 + 1);

  const randomNumber = dice1 + dice2;
  console.log(randomNumber);
  // return randomNumber;

  if (randomNumber == 7 || randomNumber == 11) {
    player.playerScore = player.playerScore + 1;
    displayPlayerScore.textContent = player.playerScore;
  } else if (randomNumber === 2 || randomNumber == 3 || randomNumber == 12) {
    player.playerScore--;
    displayPlayerScore.textContent = player.playerScore;
  } else return;

  console.log("total points");
  console.log(player.playerScore);
}

/////////////////////////////////////////
//working btn
play.addEventListener("click", () => {
  rollDice();
});

/////////////////////////////////////////////////////////////////////////////

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
