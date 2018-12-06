// Letter constructor
function Letter(character) {
  this.character = character.toUpperCase();
  this.guessedCorrectly = false;

  this.returnCharacter = function() {
    if (this.guessedCorrectly) {
      return this.character;
    } else {
      return "_";
    }
  };

  this.check = function(guess) {
    if (this.character.toLowerCase() == guess.toLowerCase()) {
      this.guessedCorrectly = true;
    } else {
    }
  };
}

// export letter constructor
module.exports = Letter;
