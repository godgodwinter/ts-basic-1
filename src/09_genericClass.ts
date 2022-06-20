
// Generic mirip any tetapi any tidak menghandle error misal ketika string.length dan number.length akan menjadi undefine

// sedangkan generic menghandle error tersebut

class List<T>{
    private data: T[]; //T = generic array
    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }

}

let numbers = new List<number>(1, 2, 3);
console.log(numbers.getAll());

let strings = new List<string>("a", "b", "c");
console.log(strings.getAll());

let randomData = new List<number | string>("a", 2, "b");
console.log(randomData.getAll());
