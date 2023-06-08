const readlineSync = require("readline-sync")

/**
 * return object of element insert by user
 *
 * @return {object}
 */
function askTvSerie() {
	let name = readlineSync.question('Can you give me the name of the show ? ')
	let year = readlineSync.question('Can you give me the year of production of the show ? ')
	let n = readlineSync.question('How many cast members there are ? ')
	let arrNames = []
	
	for (let i = 0; i < n; i++) {
		arrNames.push(readlineSync.question('Name of the ' + (i + 1) + ' members => '))
	}
	
	let myObject = {
		"name": name,
		"yearOfProduction": year,
		"castMembers": arrNames
	}
	
	console.log(myObject)
}

askTvSerie()