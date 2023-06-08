/**
 * return average of array
 * @param {arr} array of int
 *
 */
function average(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum / arr.length
}

/**
 * return minimum elemnt
 * @param {arr} array of int
 * @return {int}
 */
function min(arr) {
	return Math.min(...arr)
}

/**
 * return maximum elment
 * @param {arr} array of int
 * @return {int}
 */
function max(arr) {
	return Math.max(...arr)
}

function rand10() {
	return parseInt(Math.random() * (Math.floor(10) - Math.ceil(1)) + Math.ceil(1))
}

function multiRand(n) {
	let arr = Array(n)
	for (let i = 0; i < n; i++) {
		arr[i] = rand10()
	}
	return arr
}

const readlineSync = require("readline-sync")

let n = parseInt(readlineSync.question('Enter a number => '))
const arr = multiRand(n)

console.log("Random numbers : " + arr)
console.log("Average : " + average(arr))
console.log("Minimum : " + min(arr))
console.log("Maximum : " + max(arr))
