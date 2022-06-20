export class User {
    constructor(public name: string, age: number) {
    }
    setName(value: string) {
        this.name = value;
    }
    getName = (): string => {
        return this.name;
    }
}

class Admin extends User {
    read: boolean = true;
    write: boolean = true;

    getRole(): { read: boolean, write: boolean } {
        return { read: this.read, write: this.write };
    }
}

let admin = new Admin("admin", 20);

console.log('====================================');
console.log(admin);
console.log('====================================');