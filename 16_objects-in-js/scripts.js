const myName = 'Mohammad'

const user1 = {
    firstName: 'Tahsin',
    lastName: 'Ahmed',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
    }
}

const user2 = {
    Mohammad: 'Ferdous',
    lastName: 'Ahmed',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
    }
}
 

console.log(user1.firstName);
console.log(user2['Mohammad']);
console.log(user2[myName]);