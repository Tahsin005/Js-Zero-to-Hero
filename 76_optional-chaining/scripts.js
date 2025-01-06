const user = {
    firstName: 'Tahsin',
    lastName: 'Ferdous',
    age: 23,
    address: {
        city: 'Coxs Bazar'
    },
    // getFullName: function() {
    //     return user.firstName + ' ' + user.lastName
    // }
}

const a = 'city'

console.log(user?.address?.city)
console.log(user?.address?.['city'])
console.log(user?.address?.[a])

console.log(user.getFullName?.())