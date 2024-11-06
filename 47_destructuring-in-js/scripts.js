const colors = ['red', 'green', 'yellow', 'pink', 'black']

const user = {
    name: 'Tahsin',
    age: 22,
    address: {
      city: 'Savar',
      state: 'Dhaka',
    },
}

// Destructuring array
const [color1, color2, color3, ...restColor] = colors
// const [,,,color4] = colors
const {3: color4} = colors

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);
console.log(restColor);

// Destructuring object
const {name: username, age, address: {city, state}} = user

console.log(username);
console.log(age);
console.log(city);
console.log(state);

function intro({age, name}) {
  console.log(age, name);
}

intro(user);