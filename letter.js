// Letter constructor
function Letter(alphabet) {
  this.alphabet = alphabet;
  this.guessed = false;
  this.displayLet = function() {
    if (this.alphabet === " ") {
      return " ";
    } else if (!this.guessed) {
      return "_";
    } else {
      return this.alphabet;
    }
  };
  this.check = function(userGuess) {
    if (userGuess === this.alphabet) {
      this.guessed = true;
    }
  };
}

// export letter constructor
module.exports = Letter;
