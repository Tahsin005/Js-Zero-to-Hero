const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9, 10]

const myName = 'Tahsin'

const joinedArray = [...num1, ...num2]
const joinedArrayWithString = [...num1, ...num2, ...myName]

console.log(joinedArray);
console.log(joinedArrayWithString);


const user = {
    name: 'John',
    age: 30,
}

const updatedUser = {...user, city: 'Dhaka'}

console.log(user);
console.log(updatedUser);


function add() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(add(1, 2, 3));
console.log(add(...joinedArray));