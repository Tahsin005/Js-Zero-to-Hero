function add(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(5, 6));
console.log(add(5, 6, 7, 8));

const getSum = function () {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// This won't work in arrow functions

function example() {
    const argsArray = Array.from(arguments);
    console.log(argsArray);

    const sum = argsArray.reduce((accumulator, num) => {
        return accumulator + num;
    }, 0)
    console.log(sum);
}

example(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
