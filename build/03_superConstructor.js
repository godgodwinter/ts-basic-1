"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age); //mengambil property dari class parent
        this.read = true;
        this.write = true;
        this.phone = phone; //property yang baru
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
}
let admin = new Admin("08123456", "admin", 20);
console.log('====================================');
console.log(admin);
console.log('====================================');
