//Interface   semacam Blueprint
interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("Nyala");

    }
    off(): void {
        console.log("Mati");
    }
}


class MacBook implements Laptop {
    name: string;
    keyboarLight: boolean;

    constructor(name: string, keyboarLight: boolean) {
        this.name = name;
        this.keyboarLight = keyboarLight;
    }
    on(): void {
        console.log("Nyala");
    }
    off(): void {
        console.log("Mati");
    }
}

let asus = new Asus("Asus ROG", true);
let macbook = new MacBook("Macbook Air 200", true);
console.log(asus.on());
