"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
class MacBook {
    constructor(name, keyboarLight) {
        this.name = name;
        this.keyboarLight = keyboarLight;
    }
    on() {
        console.log("Nyala");
    }
    off() {
        console.log("Mati");
    }
}
let asus = new Asus("Asus ROG", true);
let macbook = new MacBook("Macbook Air 200", true);
console.log(asus.on());
