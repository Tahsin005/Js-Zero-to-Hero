function multiply(a = 1, b = 1) {
    return a * b;
}

console.log(multiply(4));
console.log(multiply(4, 5));
console.log(multiply(5));
console.log(multiply(5, ''));

// Default parameters will only override the undefined values

function rollADice(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}