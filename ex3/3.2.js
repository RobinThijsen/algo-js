const readlineSync = require("readline-sync")

let n = parseInt(readlineSync.question('Enter a number => '))

const arr = Array(n)
let sum = 0

for (let i = 0; i < n; i++) {
	arr[i] = parseInt(readlineSync.question('Enter a number in the array => '))
}

for (let y = 0; y < arr.length; y++) {
	sum += arr[y]
}
console.log("Average of array values = " + sum / arr.length)