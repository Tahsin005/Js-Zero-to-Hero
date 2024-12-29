const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// for (let i = 0; i < 1000; i++) {
//     addCardBtn.click()
// }

// const intervalID = setInterval(() => {
//     addCardBtn.click()
//     if (count > 1000) {
//         clearInterval(intervalID)
//     }
// }, 5);

// setTimeout(() => {
//     input.focus()
// }, 1000);

// setTimeout(() => {
//     input.blur()
// }, 3000);

setInterval(() => {
    // form.submit()
    // form.reset()
}, 4000);