// export class User {
//     public name:string;
//     constructor( name: string) {
//         this.name = name; //this name dari public,, sedang kan name ke2 dari parameter
//     }
// }

export class User {
    constructor(public name: string) {
    }
}

let user = new User ('Babeng');

console.log('====================================');
console.log(user.name);
console.log('====================================');