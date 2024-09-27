const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
const oddNumber = [1, 3, 5]


// evenNumber.shift()
// evenNumber.unshift(0)

const cnct1 = evenNumbers.concat(animals)
const cnct2 = evenNumbers.concat(animals, oddNumber)


const idxof1 = evenNumbers.indexOf(20)
const idxof2 = evenNumbers.indexOf(3) // -1

animals.includes('Dog') // true
animals.includes('Tom') // false

const filteredAnimals = animals.filter(animal => animal.startsWith('C'))

// oddNumber.reverse()

// animals.sort()

// animals.slice(2, 5) // doesn't modify the main array

animals.splice(2, 0, 'Goru')