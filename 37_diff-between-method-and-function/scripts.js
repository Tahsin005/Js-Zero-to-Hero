const maths = {
    E: 2.718,
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) { // ES6 syntax
        return a - b;
    },
    sqrt: function (a) {
        if (a < 0) {
            throw new Error('Cannot calculate square root of a negative number');
        }
        return Math.sqrt(a);
    },
    cube(num) {
        return num ** 3;
    }
}