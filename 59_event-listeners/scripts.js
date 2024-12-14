function sayHi() {
    console.log('Hello, World!');
}

const h1 = document.querySelector('h1');
const card = document.querySelector('.card');

// h1.onclick  = sayHi;

function sayHello() {
    console.log('Hello, Tahsin!');
}

h1.addEventListener('click', sayHello);
const container = document.querySelector('.container');
let i = 1;

card.addEventListener('click', function() {
    const div = document.createElement('div');
    div.classList.add('card')
    div.textContent = `${i}`;
    container.appendChild(div);
    i++;

    // const newCard = card.cloneNode();
    // newCard.classList.remove('add-card');
    // newCard.innerText = i++;
    // container.appendChild(newCard);
});