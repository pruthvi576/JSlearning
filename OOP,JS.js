// constructor in class 
class Car {
    constructor(brand, model) {
        this.brand = brand; // 'this' refers to the instance being created
        this.model = model;
    }
    getDetails() {
        return `${this.brand} ${this.model}`; // 'this' refers to the instance
    }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails()); // Toyota Corolla
// summary of constructor in class
// In class constructors, 'this' refers to the instance being created.
// This allows each instance to have its own properties and methods.
// In class methods, 'this' refers to the instance of the class, enabling access to instance properties and other methods.

//prototypes and 'this'
function Animal(type) {
    this.type = type; // 'this' refers to the instance being created
}

Animal.prototype.getType = function() {
    return this.type; // 'this' refers to the instance
}
const dog = new Animal("Dog");
console.log(dog.getType()); // Dog
// summary of prototypes and 'this'
// In constructor functions, 'this' refers to the instance being created.
// In prototype methods, 'this' refers to the instance on which the method is called.
// This allows prototype methods to access instance properties and maintain shared behavior across instances.
// and it is used to add methods to all instances of a constructor function without redefining them for each instance.

// new keyword 
function Person(name) {
    this.name = name; // 'this' refers to the new instance being created
}
const personA = new Person("Alice");
console.log(personA.name); // Alice
// summary of new keyword
// When a function is called with the 'new' keyword, 'this' inside the function refers to the newly created object.
// This allows the function to initialize properties on the new object.
// The 'new' keyword is essential for creating instances of constructor functions.

// ES6 Classes
// constructor , methods , extends , super
class AnimalClass {
    constructor(name) {
        this.name = name; // 'this' refers to the instance being created
    }
    speak() {
        console.log(`${this.name} makes a noise.`); // 'this' refers to the instance
    }
}
class DogClass extends AnimalClass {    //here extends is used to inherit properties and methods from AnimalClass
    constructor(name) {
        super(name); // Calls the parent class constructor with 'this' bound to the new instance
    }
    speak() {
        console.log(`${this.name} barks.`); // 'this' refers to the instance
    }
}
const dogClass = new DogClass("Rex");
dogClass.speak(); // Rex barks.
// summary of ES6 Classes
// In ES6 classes, 'this' in the constructor refers to the instance being created.
// In class methods, 'this' refers to the instance of the class.
// The 'extends' keyword allows a class to inherit properties and methods from another class.
// The 'super' keyword is used to call the parent class constructor and methods, ensuring proper initialization of inherited properties.

// prototype inheritance
function Vehicle(type) {
    this.type = type; // 'this' refers to the instance being created
}
Vehicle.prototype.getType = function() {
    return this.type; // 'this' refers to the instance
}
function CarVehicle(brand, model) {
    Vehicle.call(this, "Car"); // Call parent constructor with 'this' bound to the new instance
    this.brand = brand;
    this.model = model;
}
CarVehicle.prototype = Object.create(Vehicle.prototype);
CarVehicle.prototype.constructor = CarVehicle;
CarVehicle.prototype.getDetails = function() {
    return `${this.brand} ${this.model}`; // 'this' refers to the instance
}
const myCarVehicle = new CarVehicle("Honda", "Civic");
console.log(myCarVehicle.getType());
console.log(myCarVehicle.getDetails());
// summary of prototype inheritance
// In prototype inheritance, 'this' in the constructor refers to the instance being created.
// In prototype methods, 'this' refers to the instance on which the method is called.
// The parent constructor is called with 'this' bound to the new instance to ensure proper initialization of inherited properties.

// classic inheritance
function Parent(name) {
    this.name = name; // 'this' refers to the instance being created
}
Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`); // 'this' refers to the instance
}
function Child(name, age) {
    Parent.call(this, name); // Call parent constructor with 'this' bound to the new instance
    this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.introduce = function() {
    console.log(`I am ${this.name} and I am ${this.age} years old.`); // 'this' refers to the instance
}
const childInstance = new Child("Bob", 10);
childInstance.greet(); // Hello, my name is Bob
childInstance.introduce(); // I am Bob and I am 10 years old.
// summary of classic inheritance
// In classic inheritance, 'this' in the constructor refers to the instance being created.
// In prototype methods, 'this' refers to the instance on which the method is called.

// The parent constructor is called with 'this' bound to the new instance to ensure proper initialization of inherited properties.
// This allows child instances to access and use methods defined in the parent prototype.

