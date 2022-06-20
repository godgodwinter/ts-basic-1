"use strict";
// Abstact Class adalah sebuah class yang tidak dapat diinstansiasi, hanya dapat dijadikan sebagai template untuk class yang lain.
//Harus meng Extend sebuah class childnya 
class Vehicle {
    start() {
        console.log("brembrembrem");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
