// Define the FlyBehavior interface
class FlyBehavior {
    constructor() {
        if (this.constructor === FlyBehavior) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    fly() {
        throw new Error("Method 'fly()' must be implemented.");
    }
}

// Define concrete implementations of FlyBehavior
class FlyWithWings extends FlyBehavior {
    fly() {
        console.log("I'm flying!");
    }
}

class FlyNoWay extends FlyBehavior {
    fly() {
        console.log("I can't fly");
    }
}

class FlyRocketPowered extends FlyBehavior {
    fly() {
        console.log("I'm flying with a rocket!");
    }
}

// Define the QuackBehavior interface
class QuackBehavior {
    constructor() {
        if (this.constructor === QuackBehavior) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    quack() {
        throw new Error("Method 'quack()' must be implemented.");
    }
}

// Define concrete implementations of QuackBehavior
class Quack extends QuackBehavior {
    quack() {
        console.log("Quack");
    }
}

class MuteQuack extends QuackBehavior {
    quack() {
        console.log("<< Silence >>");
    }
}

class Squeak extends QuackBehavior {
    quack() {
        console.log("Squeak");
    }
}

// Define the abstract Duck class
class Duck {
    /**
     * Constructor function for the Duck class.
     *
     * @param {FlyBehavior} flyBehavior - the fly behavior of the duck
     * @param {QuackBehavior} quackBehavior - the quack behavior of the duck
     */
    constructor(flyBehavior, quackBehavior) {
        if (this.constructor === Duck) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    display() {
        throw new Error("Method 'display()' must be implemented.");
    }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    swim() {
        console.log("All ducks float, even decoys!");
    }

    /**
     * Sets the fly behavior of the object.
     *
     * @param {FlyBehavior} fb - The fly behavior to set.
     * @return {undefined} Returns undefined.
     */
    setFlyBehavior(fb) {
        console.log(`Changing fly behavior to ${fb.constructor.name}`);
        this.flyBehavior = fb;
    }

    /**
     * Sets the quack behavior of the object.
     * @param {QuackBehavior} qb - The quack behavior to set.
     * @return {undefined} Returns undefined.
     * 
     */
    setQuackBehavior(qb) {
        console.log(`Changing quack behavior to ${qb.constructor.name}`);
        this.quackBehavior = qb;
    }
}

// Example of a concrete Duck subclass
class MallardDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new Quack());
    }

    display() {
        console.log("I'm a real Mallard duck");
    }
}


//  Creating and Using a MallardDuck Object:
let mallard = new MallardDuck();
mallard.display(); // Output: I'm a real Mallard duck
mallard.performQuack(); // Output: Quack
mallard.performFly(); // Output: I'm flying!
mallard.swim(); // Output: All ducks float, even decoys!

console.log("\n");

// Change the fly behavior dynamically
mallard.setFlyBehavior(new FlyRocketPowered());
mallard.performFly(); // Output: Changing fly behavior to FlyRocketPowered, followed by I'm flying with a rocket!

console.log("\n");

// Change the quack behavior dynamically
mallard.setQuackBehavior(new Squeak());
mallard.performQuack(); // Output: Changing quack behavior to Squeak, followed by Squeak