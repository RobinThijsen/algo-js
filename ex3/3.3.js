const readlineSync = require("readline-sync")

const x = parseInt(readlineSync.question('push or slice ? (1/2) '))
let n = parseInt(readlineSync.question('Enter a number => '))

let arr = Array(n)
let copyArr = []

for (let i = 0; i < n; i++) {
	arr[i] = parseInt(readlineSync.question('Enter a number in the array => '))
}

if (x == 1) {
	for (let y = 0; y < arr.length; y++) {
		copyArr.push(arr[y])
	}
} else {
	copyArr = arr.slice()
}
console.log(arr)
console.log(copyArr)