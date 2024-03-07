// Selector The Image From Both Player
let player1 = document.querySelectorAll("img")[0];
let player2 = document.querySelectorAll("img")[1];

// Selector For The Winner
let winner = document.querySelector("h1");

// Generate Random Number For Dice
let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log({ randomNum1 }, { randomNum2 });

// Taking Image Based On randomNum1
let randomDice1 = `./images/Dice${randomNum1}.png`;
player1.setAttribute("src", randomDice1);

// Taking Image Based On randomNum2
let randomDice2 = `./images/Dice${randomNum2}.png`;
player2.setAttribute("src", randomDice2);

// Conditional Rendering
if (randomNum1 > randomNum2) {
  winner.innerHTML = "Player 1 Menang";
  player1.style.scale = "1.2";
  player2.style.opacity = "0.5";
} else if (randomDice1 === randomDice2) {
  winner.innerHTML = "Draw";
} else {
  winner.innerHTML = "Player 2 Menang";
  player2.style.scale = "1.2";
  player1.style.opacity = "0.5";
}
