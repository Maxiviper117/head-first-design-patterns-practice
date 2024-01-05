# Define the FlyBehavior interface (in Python we use abstract base classes for this)
from abc import ABC, abstractmethod

class FlyBehavior(ABC):
    behavior = ""

    @abstractmethod
    def fly(self):
        pass

# Define concrete implementations of FlyBehavior
class FlyWithWings(FlyBehavior):
    behavior = "FlyWithWings"

    def fly(self):
        print("I'm flying!")

class FlyNoWay(FlyBehavior):
    behavior = "FlyNoWay"

    def fly(self):
        print("I can't fly")

class FlyRocketPowered(FlyBehavior):
    behavior = "FlyRocketPowered"

    def fly(self):
        print("I'm flying with a rocket!")

# Define the QuackBehavior interface
class QuackBehavior(ABC):
    behavior = ""

    @abstractmethod
    def quack(self):
        pass

# Define concrete implementations of QuackBehavior
class Quack(QuackBehavior):
    behavior = "Quack"

    def quack(self):
        print("Quack")

class MuteQuack(QuackBehavior):
    behavior = "MuteQuack" 

    def quack(self):
        print("<< Silence >>")

class Squeak(QuackBehavior):
    behavior = "Squeak"

    def quack(self):
        print("Squeak")

# Define the abstract Duck class
class Duck(ABC):
    def __init__(self, fly_behavior: FlyBehavior, quack_behavior: QuackBehavior):
        self.fly_behavior = fly_behavior
        self.quack_behavior = quack_behavior
    
    @abstractmethod
    def display(self):
        pass
    
    def perform_fly(self):
        self.fly_behavior.fly()
    
    def perform_quack(self):
        self.quack_behavior.quack()
    
    def swim(self):
        print("All ducks float, even decoys!")

    def setFlyBehavior(self, fb: FlyBehavior):
        print(f"Changing fly behavior to {fb.behavior}")
        self.fly_behavior = fb

    def setQuackBehavior(self, qb: QuackBehavior):
        print(f"Changing quack behavior to {qb.behavior}")
        self.quack_behavior = qb

# Example of a concrete Duck subclass
class MallardDuck(Duck):
    def __init__(self):
        super().__init__(FlyWithWings(), Quack()) # starts with a default behavior
    
    def display(self):
        print("I'm a real Mallard duck")

class ModelDuck(Duck):
    def __init__(self):
        super().__init__(FlyNoWay(), Quack()) # starts with a default behavior
    
    def display(self):
        print("I'm a model duck")

# Creating and Using a MallardDuck Object:
mallard = MallardDuck()
mallard.perform_quack()
mallard.perform_fly()
mallard.display()
mallard.swim()

print("\n")

# Changing the fly behavior dynamically:
mallard.setFlyBehavior(FlyRocketPowered())
mallard.perform_fly()

print("\n")

# Changing the quack behavior dynamically:
mallard.setQuackBehavior(Squeak())
mallard.perform_quack()