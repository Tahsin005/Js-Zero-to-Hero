const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// window.addEventListener('click', (e) => {
//     console.log('Window Event Listeners')
// }, { capture: true })

// document.addEventListener('click', (e) => {
//     console.log('Document Event Listeners')
// })

// document.body.addEventListener('click', (e) => {
//     console.log('Body Event Listeners')
// })

// green.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log('Green Event Listeners')
// }, { capture: true })

// pink.addEventListener('click', (e) => {
//     console.log('Pink Event Listeners')
// })

blue.addEventListener('click', (e) => {
    console.log('Blue Event Listeners')
}, { capture: true, once: true })