# WordGuess-CLI

Simple word guess game that accepts user input using inquirer npm package.

After running the js file, the user will be presented with a random hidden word with underlines in it's place for each letter.

User has 10 guesses to correctly guess the hidden word.

The user is only able to enter one letter at a time / If they enter more than one letter they will encounter an error response.

When user guesses correct letter, all letters in the guess word that match that letter will be printed and replace the underline.

When user guesses incorrect letter you will be deducted a guess and guessed letter will added to guessed list.

If user guesses all letters correctly they will be receive a congratulations reponse and prompted to start a new game.

If user runs out of guesses, game will end and user will be shown the correct word.

### NPM Install Requirements:

`npm inquirer`

### Built with:

`Visual Studio Code (https://code.visualstudio.com) - Text editor`

`Javascript`

`Node.js (https://nodejs.org/en) - Framework used`

## Demo of functioning app:

### Initialization: 'node index.js'

![initialize](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/initialize_game_screenshot.png)

### Correctly selected letter:

![correct](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/correct_guess_screenshot.png)

### Incorrectly selected letter:

![incorrect](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/incorrect_guess_screenshot.png)

### Error Response:

![error response](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/error-code.png)

### End Game:

![End Game](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/endgame_screenshot.png)

![Full Video Demo]()
