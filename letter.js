// Letter constructor
function Letter(alpha) {
    this.alpha = alpha;
    this.guessed = false;
    this.displayLet = function() {
        if (this.alpha === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.alpha;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.alpha) {
            this.guessed = true;
        }
    }
}

// Make this Constructor available in other files
module.exports = Letter;