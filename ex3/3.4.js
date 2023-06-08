const readlineSync = require("readline-sync")

let n = parseInt(readlineSync.question('Enter a number => '))
let arr = Array(n)

for (let i = 0; i < n; i++) {
	arr[i] = parseInt(readlineSync.question('Enter a number in the array => '))
}

console.log("Value of first element = " + arr[0])
console.log("Value of last element = " + arr[arr.length-1])