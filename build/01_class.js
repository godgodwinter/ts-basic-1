"use strict";
// export class User {
//     public name:string;
//     constructor( name: string) {
//         this.name = name; //this name dari public,, sedang kan name ke2 dari parameter
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User('Babeng');
console.log('====================================');
console.log(user.name);
console.log('====================================');
