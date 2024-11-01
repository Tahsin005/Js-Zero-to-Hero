// function parent() {
//     const a = 4;
//     const b = 6;
//     function add() {
//         console.log(a + b)
//     }

//     return add
// }

// parent()()


function outer() {
    function parent() {
        const a = 4;
        const b = 6;
        function add() {
            console.log(a + b)
        }

        return add
    }

    return parent
}

outer()()()