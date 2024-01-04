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
