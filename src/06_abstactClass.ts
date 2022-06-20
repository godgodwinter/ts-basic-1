// Abstact Class adalah sebuah class yang tidak dapat diinstansiasi, hanya dapat dijadikan sebagai template untuk class yang lain.
//Harus meng Extend sebuah class childnya 

abstract class Vehicle {
    abstract wheels: number;
    start(): void {
        console.log("brembrembrem");

    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motor extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);

car.start();