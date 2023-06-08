/**
 * calcule la surface d'un rectangle
 * @param {length} longueur du rectangle
 * @param {width} largeur du rectangle
 *
 * return surface du rectangle
 */
function calcSurface(length, width) {
	return length * width
}

const readlineSync = require("readline-sync")

let length = parseInt(readlineSync.question('Enter length of rectangle => '))
let width = parseInt(readlineSync.question('Enter width of rectangle => '))

console.log(calcSurface(length, width))