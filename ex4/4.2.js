/**
 * affiche un integer random
 *
 */
function rand10() {
	console.log(parseInt(Math.random() * (Math.floor(10) - Math.ceil(1)) + Math.ceil(1)))
}
rand10()