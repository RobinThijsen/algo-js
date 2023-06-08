function loopWhile() {
	let i = 0
	while(i <= 100) {
		if (i % 2 === 0) console.log(i)
		i++
	}
	console.log("While loop")
}

function looFor() {
	for (let y = 0; y <= 100; y++) {
		if (y % 2 === 0) console.log(y)
	}
	console.log("For loop")
}

const readlineSync = require("readline-sync")

let x = parseInt(readlineSync.question('Loop For or While ? (1/2) '))

if (x == 1) looFor()
else loopWhile()