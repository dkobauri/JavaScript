// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animal {
    constructor(move) {
        this.move = move;
    }

    walk() {
        console.log(`This animal can ${this.move}.`)
    }
}

class Cat extends Animal {
    constructor(move) {
        super(move);
    }
}

const Rex = new Cat("walk");
Rex.walk();
