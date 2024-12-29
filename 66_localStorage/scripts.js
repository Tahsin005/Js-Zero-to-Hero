const nameElement = document.querySelector('.name-tag');
const ageElement = document.querySelector('.age-tag');
const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');

// nameElement.innerText = localStorage.myName; // returns undefined if not found
// nameElement.innerText = localStorage.getItem('myName'); // returns null if not found
// ageElement.innerText = localStorage.getItem('myAge');

// nameInput.addEventListener('input', (e) => {
//     nameElement.innerText = e.target.value;
//     // localStorage.myName = e.target.value;
//     localStorage.setItem('myName', e.target.value);
// })

// ageInput.addEventListener('input', (e) => {
//     ageElement.innerText = e.target.value;
//     localStorage.setItem('myAge', e.target.value);
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {};

nameElement.innerText = myData.name || 'Your Name';
ageElement.innerText = myData.age || 22;

nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameElement.innerText = e.target.value;
})

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    ageElement.innerText = e.target.value;
})


// localStorage.removeItem('myData');