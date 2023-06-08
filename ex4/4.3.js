function rand10() {
	return parseInt(Math.random() * (Math.floor(10) - Math.ceil(1)) + Math.ceil(1))
}
let arr = Array(4)

/**
 * return array of multiple random int
 *
 * @param {n} length of array
 *
 */
function multiRand(n) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = rand10()
	}
	return arr
}
multiRand(arr.length)

console.log(arr)