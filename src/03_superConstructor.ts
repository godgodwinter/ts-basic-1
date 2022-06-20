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
    phone: string; //menambahkan property baru

    constructor(phone: string, name: string, age: number) {
        super(name, age); //mengambil property dari class parent
        this.phone = phone; //property yang baru
    }

    getRole(): { read: boolean, write: boolean } {
        return { read: this.read, write: this.write };
    }
}

let admin = new Admin("08123456", "admin", 20);

console.log('====================================');
console.log(admin);
console.log('====================================');