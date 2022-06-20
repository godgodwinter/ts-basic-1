// contoh any
function getData(value: any) {
    return value;
}

console.log(getData("Babeng").length);
console.log(getData(123).length);


// Generic mirip any tetapi any tidak menghandle error misal ketika string.length dan number.length akan menjadi undefine

// sedangkan generic menghandle error tersebut

function myData<T>(value: T): T {
    return value;
}

console.log(myData("Babeng").length);
console.log(myData(123));


// contoh arrow function
let myData2 = <T>(value: T): T => value;
console.log(myData2("Babeng").length);
console.log(myData2(123));