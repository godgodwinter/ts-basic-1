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
    private _email: string = ""; // agar tidak dapat diakses  klass dari luar / dipaksak melalui getter

    constructor(phone: string, name: string, age: number) {
        super(name, age); //mengambil property dari class parent
        this.phone = phone; //property yang baru
    }

    getRole(): { read: boolean, write: boolean } {
        return { read: this.read, write: this.write };
    }

    set email(value: string) { //set tidak boleh ada return
        // bisa untuk validasi 
        if (value.indexOf("@") < 1) {
            this._email = "Email tidak valid!";
        } else {
            this._email = value;
        }
    }
    get email(): string {
        return this._email;
    }

}

let admin = new Admin("08123456", "admin", 20);

console.log('====================================');
console.log(admin);
console.log('====================================');

admin.email = "admin@gmail.com";
console.log(admin.email);