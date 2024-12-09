const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// const image = document.querySelector('.first-image');

// for (let i = 2; i <= 100; i++) {
//     const newImage = image.cloneNode();
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.append(newImage);
// }

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    const newImage = document.createElement('img');
    div.style.textAlign = 'center';
    div.style.border = '1px solid black';
    div.style.borderRadius = '5px';
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    div.appendChild(newImage);
    const pDiv = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = `#${i}`;
    pDiv.appendChild(p);
    div.appendChild(pDiv);
    container.append(div);
}