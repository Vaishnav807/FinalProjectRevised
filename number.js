let randomNumber = parseInt((Math.random() * 100) + 1);

//ChatGPT helped with my code by replacing the "document.getElementById" with "document.querySelector" for flexibility and also easier to code.
const submit = document.querySelector(`#sub2`);
const userInput = document.querySelector(`#guessField`);
const guessSlot = document.querySelector(`.guesses`);
const remaining = document.querySelector(`.lastResult`);
const lowOrHi = document.querySelector(`.lowOrHi`);
const refresh = document.querySelector(`.refresh`);

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click",function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`);
    } else if (guess < 1) {
        alert(`Please enter a number greater than 0!`);
    } else if (guess > 100) {
        alert(`Please enter a number less than 101!`);
    } else {
        previousGuesses.push(guess);
        displayGuesses(guess);

        //had a problem that when the user gets the number right at the last attempt
        //it wouldn't tell that the user won, so i asked chat to help with my if-else statements and fixed it

        if (guess === randomNumber) {
            displayMessage1(`You guessed correctly!`);
            displayMessage2(`Refresh the page to play again!`);
            endGame();
        } else if (numGuesses === 8) {
            displayMessage1(`Game Over! Number was ${randomNumber}`);
            displayMessage2(`Refresh the page to play again!`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage1(`You guessed correctly!`);
        displayMessage2(`Refresh the page to play again!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage1(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage1(`Too high! Try again!`);
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += guess + ', ';
    numGuesses++;
    remaining.innerHTML = `${8 - numGuesses}`;
}

function displayMessage1(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function displayMessage2(message){
    refresh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ``;
    userInput.setAttribute(`disabled`, '');
    playGame = false;
}
