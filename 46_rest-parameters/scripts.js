const nums1 = [1, 2, 3, 4]

// function add(a, b, ...nums) {
//     // Rest parameter should be last in the parameter list - it's value will always be and empty array if no value is provided.
//     console.log(a, b, nums);
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//     return sum
// }

function add(a, b, ...nums) {
    return nums.reduce((accumulator, num) => {
        return accumulator + num;
    })
}

// function add() {
//     return [...arguments].reduce((accumulator, num) => {
//         return accumulator + num;
//     })
// }

// function add() {
//     return Array.from(arguments).reduce((accumulator, num) => {
//         return accumulator + num;
//     })
// }

console.log(add(1, 2, 3));
console.log(add(...nums1));
console.log(add(...nums1, 8, 9, 56));