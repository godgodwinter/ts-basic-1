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
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
}
let admin = new Admin("admin", 20);
console.log('====================================');
console.log(admin);
console.log('====================================');
