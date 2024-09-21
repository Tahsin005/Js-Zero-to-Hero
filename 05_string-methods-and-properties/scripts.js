const message = 'Hello World!' 

console.log(message.length)

const capitalMessage = message.toUpperCase()

console.log(capitalMessage)

console.log(message.toLowerCase())




const faltuMessage = '            Hi, I am Tahsin.           '

console.log(faltuMessage.trim())
console.log(faltuMessage.trimStart())
console.log(faltuMessage.trimEnd())

console.log(faltuMessage.trim().toLowerCase())


const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLowerCase()


console.log(finalMessage.includes('am'));


console.log(finalMessage.indexOf('I'));
console.log(finalMessage.indexOf('a'));
console.log(finalMessage.indexOf('M'));


console.log(finalMessage.replace('Hi', 'Assalamu Alaikum'));
console.log(finalMessage.replace('a', 'A'));
console.log(finalMessage.replaceAll('a', 'A'));


console.log(message.concat(', ', finalMessage));
console.log(message.concat(' ').concat(finalMessage));



const lastFourDigits = '8447'
console.log(lastFourDigits.padStart(12, '*'));
console.log(lastFourDigits.padEnd(12, '*'));


console.log(message.charAt(6))
console.log(message.charCodeAt(6))


console.log(faltuMessage.trim().split(' '));

const bankBalance = 9873

const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
console.log(concatenatedString);
const templateString = `My account number is ${lastFourDigits}.`
console.log(templateString);
const templateString2 = `I have $${bankBalance} in my account.`
console.log(templateString2);

const addedString = 'I have $' + bankBalance + ' in my account.'
console.log(addedString);