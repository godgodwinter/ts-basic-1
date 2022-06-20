"use strict";
// Generic mirip any tetapi any tidak menghandle error misal ketika string.length dan number.length akan menjadi undefine
// sedangkan generic menghandle error tersebut
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 2, 3);
console.log(numbers.getAll());
let strings = new List("a", "b", "c");
console.log(strings.getAll());
let randomData = new List("a", 2, "b");
console.log(randomData.getAll());
