const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("*********************");

for (fruit of fruits) {
    console.log(fruit);
}

console.log("*********************");

for (const fruit of fruits) {
    console.log(fruit);
}

console.log("*********************");

const user = 'Tahsin'

for (const letter of user) {
    console.log(letter);
}


const person = {
    name: 'John',
    age: 30,
    address: '123 Main St',
}

console.log("*********************");

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("*********************");

const personKey = Object.keys(person);
const personValues = Object.values(person);
const personEntries = Object.entries(person);


for (const key of personKey) {
    console.log(`${key}: ${person[key]}`);
}

for (const value of personValues) {
    console.log(value);
}

for (const entry of personEntries) {
    console.log(entry);
    console.log(`${entry[0]}: ${entry[1]}`);
}