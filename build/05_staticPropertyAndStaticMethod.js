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
        this._email = ""; // agar tidak dapat diakses  klass dari luar / dipaksak melalui getter
        this.phone = phone; //property yang baru
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    set email(value) {
        // bisa untuk validasi 
        if (value.indexOf("@") < 1) {
            this._email = "Email tidak valid!";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin"; //property atau method yang bisa diakses langsung dari class itu sendiri
//tidak perlu diinstansiasi terlebih dahulu karena static
let admin = Admin.getRoleName;
console.log('====================================');
console.log(admin);
console.log('====================================');
