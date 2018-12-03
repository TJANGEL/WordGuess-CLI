// Requirements
var Word = require("./word.js");
var inquirer = require('inquirer');

// Global Variables MARIO themed
wordList = ["YOSHI", "MARIO", "PRINCESS PEACH", "LUIGI", "PRINCESS DAISY", "BOWSER", "PAULINE", "TOAD", "CHAIN CHOMP", "BIRDO", "ROSALINA", "DONKEY KONG"];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

// Initiate game function
function startGame() {
    if (wordList.length < 2) {
        wordList = ["YOSHI", "MARIO", "PRINCESS PEACH", "LUIGI", "PRINCESS DAISY", "BOWSER", "PAULINE", "TOAD", "CHAIN CHOMP", "BIRDO", "ROSALINA", "DONKEY KONG"];
    }
    select = Math.floor(Math.random() * wordList.length);
    chosenWord = wordList[select];
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    if (select > -1) {
        wordList.splice(select, 1);
    }
    console.log("\nYou Get 10 Chances to Correctly Guess this Name\n")
    promptUser();
}

//Allows the user to input a letter guess, restarts the game if player is out of wrong guesses.
function promptUser() {
    if (counter < 8) {
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\nPick a letter and press enter. "
            }
        ]).then(function (data) {
            checkAnswer(data);
        });
    }
    else {
        console.log("\nSorry, You Ran Out of Guesses!\n");
        console.log(chosenWord);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
}

// check if letter is correct
function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkable = data.letter.toUpperCase();
        var temp = gameWord.showWord();
        gameWord.checkGuess(checkable);
        if (temp === gameWord.showWord()) {
            console.log("\nSorry, wrong letter!\n");
            counter++;
            console.log(((8 - counter) + " guesses remaining"));
            promptUser();
        }
        else {
            rightGuess();
        }
    }
    else {
        console.log("\nYou Can Only Enter One Letter At A Time!\n");
        promptUser();
    }
}

// response if you guess the correct word
function rightGuess() {
    console.log("\nYou guessed correctly!\n");
    if (chosenWord.replace(/ /g, "") == (gameWord.showWord()).replace(/ /g, "")) {
        console.log(gameWord.showWord());
        console.log('\nYou win!!\n');
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}

// initiate game
startGame();