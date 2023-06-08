const readlineSync = require("readline-sync")

function rand(min, max) {
	return parseInt(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

let numRandom = rand(1, 100)

let numUser = readlineSync.question('Can you give me the number ? ')

while(numUser != numRandom) {
	if (numUser < numRandom) console.log("Too low")
	else console.log("Too high")
	numUser = readlineSync.question('Can you give me the number ? ')
}

console.log("Great job! The number to find was " + numRandom)
