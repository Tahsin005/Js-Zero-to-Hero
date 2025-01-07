const randomNumber = Math.floor(Math.random() * 101);
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
const guessesSoFar = document.querySelector('#guesses-so-far');
const guessCounter = document.querySelector('#guess-counter');
let guesses = [];


submitBtn.addEventListener('click', () => {
    if (guessInput.value != '' && message.innerText != `Congratulations! You guessed correctly!`) {
        guessesSoFar.innerText = '';
        let guessInputToNumber = parseInt(guessInput.value);

        if (guessInputToNumber < 0 || guessInputToNumber > 100) {
            message.classList.add('message-box')
            message.innerText = `Enter a number between 0 to 100`;
            return;
        }

        if (guessInputToNumber < randomNumber) {
            message.classList.add('message-box')
            message.innerText = `Your guess is low!`;
        } else if (guessInputToNumber > randomNumber) {
            message.classList.add('message-box')
            message.innerText = `Your guess is high!`;
        } else {
            message.classList.add('message-box')
            message.innerText = `Congratulations! You guessed correctly!`;

        }
        guesses.push(guessInput.value);


        for (let i = 0; i < guesses.length; i++) {
            guessesSoFar.innerText += `${guesses[i]}, `;
            guessInput.value = '';
        }
        guessCounter.innerText = guesses.length;
    }

})