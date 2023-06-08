const readlineSync = require("readline-sync")

let i = parseInt(readlineSync.question('Your favorite number ? '))

while(i != 42) {
	i = parseInt(readlineSync.question('Are you sure ? '))
}
console.log("Thats good ma boy !")