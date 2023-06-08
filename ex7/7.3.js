const readlineSync = require("readline-sync")

let n = parseInt(readlineSync.question('Enter the number of terms => '))

while (n < 0) {
	n = parseInt(readlineSync.question('Enter the number of terms => '))
}

for (let i = 0; i < n; i++) {
	if (i != 1 && i != n) {
		if (n % i == 0) console.log(i)
	}
}