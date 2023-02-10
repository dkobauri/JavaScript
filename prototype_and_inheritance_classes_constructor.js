// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class animal {
    constructor(move) {
        this.move = move;
    }

    walk() {
        console.log(`This animal can ${this.move}.`);
    }
}

class cat extends animal {
    constructor(move) {
        super(move);
    }
}

const rex = new cat("walk");
rex.walk();
