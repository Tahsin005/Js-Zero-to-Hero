const nums = [1, 2, 3];

const sum = nums.reduce((accumulator, current, index, array) => {
    return accumulator + current
}, 0);

console.log(sum); 