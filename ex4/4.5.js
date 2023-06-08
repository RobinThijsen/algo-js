/**
 * return distance entre 2 points
 * @param {point1} array of 2 int
 * @param {point2} array of 2 int
 * @return {double}
 * 
 */
function calcDistance(point1, point2) {
	let [x1, y1] = point1
	let [x2, y2] = point2
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2)
}



console.log(calcDistance([1, 1], [2, 2]))