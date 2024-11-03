const evenNumbers = [0, 2, 3, 4, 6, 8]

const someEvenOrNot = evenNumbers.some((num, index, array) => {
    // if (num % 2 == 1) {
    //     console.log(index)
    // }
    return (num % 2 == 0);
}) // just like or operator... iterates/executes untill it finds true for one element, if it finds true for even one element, the iteration won't continue.

console.log(`Some Even ?: ${someEvenOrNot}`);

const allEvenOrNot = evenNumbers.every((num, index, array) => {
    // if (num % 2 == 1) {
    //     console.log(index)
    // }
    return (num % 2 == 0);
}) // just like and operator... iterates/executes untill it finds flase for one element, if it finds false for even one element, the iteration won't continue.

console.log(`All Even ?: ${allEvenOrNot}`);