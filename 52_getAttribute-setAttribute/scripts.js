const paragraph = document.querySelector('[ferdous="Tahsin"]');

console.log(paragraph.innerText);

const attrbt = document.querySelector('[ferdous]').getAttribute('ferdous')

console.log(attrbt);

document.querySelector('h1').setAttribute('title', 'My name is tahsin')

console.log(document.querySelector('h1').getAttribute('title'));