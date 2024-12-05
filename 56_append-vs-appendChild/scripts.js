const h1 = document.querySelector('h1');
const container = document.querySelector(".container");
const card = document.querySelector('.card');


/*

APPENDCHILD

Can only append one node at a time.
Automatically removes the node from its previous parent if it already exists in the DOM (no duplicates).
Returns the element that was appended.

When using the appendChild method, if you pass in a cloned node, it will not remove the existing element. Instead, the cloned node will be appended as a new child.

*/

// container.appendChild(h1);
// container.appendChild(h1.cloneNode(true));
// container.appendChild(card.cloneNode(true))

const cardClone = card.cloneNode(true);

// for (let i = 2; i <= 100; i++) {
//     cardClone.innerText = `${i}`;
//     container.appendChild(cardClone.cloneNode(true));
// }

/*

APPEND

Can append multiple nodes or strings in one call.
Strings are automatically converted to text nodes.
Unlike appendChild, it does not remove an existing node from its parent; it clones the node if necessary.
It returns undefined after appending the node / string / element.

*/


const newTextNode = document.createTextNode('Tahsin');
// const h2 = document.createElement('h2');
// h2.innerText = 'Tahsin Ferdous from house 1';
container.appendChild(newTextNode);
// container.appendChild(h2);

container.append('Hello', h1, 'Bye');
container.append('Hello', h1.cloneNode(true), 'Bye');