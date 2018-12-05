# WordGuess-CLI

Simple word guess game that accepts user input using inquirer npm package.

After running the js file, the user will be presented with a random hidden word with underlines in it's place for each letter.

User has 10 guesses to correctly guess the hidden word.

The user is only able to enter one letter at a time / If they enter more than one letter they will encounter an error response.

When user guesses correct letter, all letters in the guess word that match that letter will be printed and replace the underline. Reponse: "You Guesses Correctly!"

When user guesses incorrect letter, they will receive a wrong message: "Sorry, wrong letter!"

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

![initialize](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/initialize.png)

### Correctly selected letter:

![correct](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/correct.png)

### Incorrectly selected letter:

![incorrect](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/wrongletter.png)

### Error Response:

![error response](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/images/error-code.png)

![Full Video Demo](https://github.com/TJANGEL/WordGuess-CLI/blob/master/assets/WordGuess-cli-demo.mov)
