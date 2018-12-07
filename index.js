// Requirements
var Word = require("./word.js");
var inquirer = require("inquirer");
var chalk = require("chalk");

// Global Variables MARIO themed
words = [
  "YOSHI",
  "MARIO",
  "PRINCESS PEACH",
  "LUIGI",
  "PRINCESS DAISY",
  "BOWSER",
  "WARIO",
  "WALUIGI",
  "PAULINE",
  "TOAD",
  "CHAIN CHOMP",
  "BIRDO",
  "ROSALINA",
  "DONKEY KONG"
];

// Create word to guess
var correctWord = new Word(words[Math.floor(Math.random() * words.length)]);

correctWord.generateLetters();

var guessesRemaining = 10;

var guessesSoFar = [];

console.log(chalk.red("\nSuper Mario Characters Guess Game!"));

// Reset function
function endGame(outcome) {
  if (outcome === "win") {
    console.log(chalk.blue.bold("\nYou won!"));
    console.log(
      chalk.yellow("You guessed ") +
        chalk.blue.bold(correctWord.correctWord.toUpperCase()) +
        " " +
        chalk.bgYellow.black(
          "with " + guessesRemaining + " guesses remaining"
        ) +
        "\n"
    );
  } else {
    console.log("\n" + chalk.bgRed.white.bold("You lost..."));
    console.log(
      chalk.yellow("The correct word was: ") +
        chalk.bgYellow.black(correctWord.correctWord) +
        "\n"
    );
  }

  // Create New word once game ends
  correctWord = new Word(words[Math.floor(Math.random() * words.length)]);
  correctWord.generateLetters();
  guessesRemaining = 10;
  guessesSoFar = [];

  inquirer
    .prompt([
      {
        message: "Want to play again?",
        name: "confirm",
        type: "confirm"
      }
    ])
    .then(function(response) {
      if (response.confirm) {
        console.log(chalk.cyan("\nGenerating a new word..."));
        main();
      } else {
        console.log(chalk.cyan("\nCome Back Soon!\n"));
        return;
      }
    });
}

// Main game
function main() {
  inquirer
    .prompt([
      {
        name: "guess",
        prefix: "",
        message:
          "\nWord: " +
          chalk.blue(correctWord.update()) +
          "\n\nGuesses Remaining: " +
          chalk.magenta.bold(guessesRemaining) +
          "\nLetters Guessed: " +
          chalk.magenta.bold(guessesSoFar.join(" ")) +
          "\n" +
          "Guess a letter:"
      }
    ])
    .then(function(data) {
      // Validate user input
      if (data.guess === "") {
        console.log(
          chalk.bgRed.white("\nERROR!") +
            chalk.yellow(" You did enter a letter")
        );
        return main();
      } else if (data.guess.length > 1) {
        console.log(
          chalk.bgRed.white("\nERROR!") +
            chalk.yellow(" Please guess one letter at a time")
        );
        return main();
      } else if (guessesSoFar.includes(data.guess)) {
        console.log(
          chalk.bgRed.white("\nERROR!") +
            chalk.yellow(" You already guessed that! Choose another letter")
        );
        return main();
      }

      if (!correctWord.correctWord.includes(data.guess)) {
        guessesRemaining--;
      }

      guessesSoFar.push(data.guess);

      for (var i = 0; i < correctWord.letters.length; i++) {
        correctWord.letters[i].check(data.guess);
      }

      if (
        correctWord.update().toLowerCase() ==
        correctWord.correctWord.toLowerCase()
      ) {
        endGame("win");
        return;
      }

      if (guessesRemaining == 0) {
        endGame("loss");
        return;
      }
      main();
    });
}

// Run main game function
main();
