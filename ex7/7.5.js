function sortArr(arr) {
	let actualValue
	
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				actualValue = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = actualValue
			}
		}
	}
	return arr
}

const arr = [2, 5, 3, 1]
console.log(arr)
console.log(sortArr(arr))
// arr = [1, 2, 3, 5]

console.log("\n")

const arr2 = [495, 10923, 39, 2]
console.log(arr2)
console.log(sortArr(arr2))
// arr = [2, 39, 495, 10923]