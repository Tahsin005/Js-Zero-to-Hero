const user = {
    firstName: 'Tahsin',
    lastName: 'Ferdous',
    thikana: {
        city: 'Dhaka',
        pinCode: 876876,
        state: 'Savar',
        moreDetails: {
          population: 9798897897,
          area: '787 sq km',
        },
    },
    age: 21,
    isGraduate: false,
}


// delete user.firstName


Object.seal(user) // doens't let add or delete properties, but lets you to modify existing properties
Object.freeze(user) // doens't let add or delete properties and also prevents you from modify existing properties

console.log('firstName' in user);
console.log('mobilenumber' in user); 