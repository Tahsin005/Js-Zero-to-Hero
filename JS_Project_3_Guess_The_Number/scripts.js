const randomNumber = Math.floor(Math.random() * 101);
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
const guessesSoFar = document.querySelector('#guesses-so-far');
const guessCounter = document.querySelector('#guess-counter');
let guesses = [];

console.log(guessInput)
console.log(guessInput.value)

submitBtn.addEventListener('click', () => {
    if (guessInput.value != '') {
        guessesSoFar.innerText = '';
        console.log(randomNumber, guessInput.value);
        let guessInputToNumber = parseInt(guessInput.value);

        if (guessInputToNumber < randomNumber) {
            message.innerText = `Your guess is low!`;
        } else if (guessInputToNumber > randomNumber) {
            message.innerText = `Your guess is high!`;
        } else {
            message.innerText = `Congratulations! You guessed correctly!`;
            guessInput.value = '';
        }
        guesses.push(guessInput.value);

        for (let i = 0; i < guesses.length; i++) {
            guessesSoFar.innerText += `${guesses[i]}, `;
        }
        guessCounter.innerText = guesses.length;
    }

})