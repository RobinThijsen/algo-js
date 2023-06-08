class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
	}
	sayHello() {
		console.log("Hello, " + this.firstname + " " + this.lastname + "!")
	}
}

let person = new Person('Robin', 'Thijsen')
person.sayHello()