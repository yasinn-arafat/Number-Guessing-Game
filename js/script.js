// Number Guessing Game

// Player 1 markeup referce
const content = document.querySelector(".content");
const player1 = document.querySelector(".player1");
const player1Input = document.querySelector(".player1Input");
const msg = document.querySelector(".msg");
const startBtn = document.querySelector(".startBtn");

// Player 2 markeup referce
const player2Msg = document.querySelector(".player2Msg");
const player2Input = document.querySelector(".player2Input");
const guessBtn = document.querySelector(".guessBtn");
const newGame = document.querySelector(".newGame");
const body = document.querySelector("body");

//  Store Player 1 Input
let player1Value = 0;
let chance = 4;

// Player 1 Input

startBtn.addEventListener("click", function () {
  if (
    player1Input.value != "" &&
    player1Input.value >= 0 &&
    player1Input.value <= 10
  ) {
    player1Value = player1Input.value;
    msg.innerHTML = "Superb";
    msg.style.color = "green";
    body.style.background = "#164863";
    content.style.background = "#9BBEC8";

    // Hide all  Info of Player 1

    player1.style.display = "none";
    msg.style.display = "none";
    player1Input.style.display = "none";
    startBtn.style.display = "none";

    // Visible all Info of Player 2
    player1.style.display = "block";
    player1.innerHTML = "*** Player 2 ***";
    player2Input.style.display = "block";
    guessBtn.style.display = "block";
    player2Msg.innerHTML = `"You have ${chance} Chances to Win the Game"`;
    player2Msg.style.color = "#E60965";
  } else {
    msg.innerHTML = "Invalid Credintial";
    msg.style.color = "red";
  }
});

// Guessing the number of Player 1

guessBtn.addEventListener("click", function () {
  if (
    player2Input.value != "" &&
    player2Input.value >= 0 &&
    player2Input.value <= 10
  ) {
    chance--;
    player2Msg.innerHTML = `Your Guess is Wrong & you have ${chance} Chances`;
    player2Msg.style.color = "red";

    if (player1Value === player2Input.value) {
      player2Msg.innerHTML = "** 🏆 Winner 🏆 **";
      player2Msg.style.fontSize = "xx-large";
      player2Msg.style.color = "#F8DE22";
      player2Input.style.display = "none";
      guessBtn.style.display = "none";
      //   Visible New game Button
      newGame.style.display = "block";
      // Add Event listener in newGame Button

      newGame.addEventListener("click", function () {
        location.reload();
      });
    } else if (chance === 0) {
      player2Msg.innerHTML = "👎 Loser 👎";
      player2Msg.style.fontSize = "xx-large";
      player2Msg.style.color = "red";
      player2Input.style.display = "none";
      guessBtn.style.display = "none";

      //   Visible New game Button

      newGame.style.display = "block";
      newGame.innerHTML = "Try Again";

      // Add Event listener in newGame Button

      newGame.addEventListener("click", function () {
        location.reload();
      });
    }
  } else {
    player2Msg.innerHTML = `Please Insert a value between 0 - 10 <br> & You have ${chance} Chances`;
    player2Msg.style.color = "red";
  }
});
