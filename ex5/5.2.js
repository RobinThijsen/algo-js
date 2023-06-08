const readlineSync = require("readline-sync")

/**
 * return reordered randomly the array
 * @param {tvSerie} object
 *
 * @return {tvSerie} same object with random ordered cast members
 */
function randomizeCast(tvSerie) {
	let currentIndex = tvSerie.castMembers.length, randomIndex
	
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		[tvSerie.castMembers[currentIndex], tvSerie.castMembers[randomIndex]] = [tvSerie.castMembers[randomIndex], tvSerie.castMembers[currentIndex]]
	}
	return tvSerie
}

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
	
	return myObject
}

let myObject = askTvSerie()

randomizeCast(myObject)
console.log("Cast members for the new series = " + myObject.castMembers)