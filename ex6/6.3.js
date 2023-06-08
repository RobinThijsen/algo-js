class Animal {
	sayHello() {
		return `${this.constructor.greeting}! I'm ${this.name}!`
	}
}

class Cat extends Animal {
	static greeting = "Meow"
	
	constructor(name) {
		super()
		this.name = name
	}
	
	sayHello() {
		return super.sayHello()
	}
}

class Dog extends Animal {
	static greeting = "Woof"
	
	constructor(name) {
		super()
		this.name = name
	}
	
	sayHello() {
		return super.sayHello()
	}
}

console.log(new Dog('Rex').sayHello())
console.log(new Cat('Skitty').sayHello())