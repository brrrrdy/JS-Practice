function mapToNames(array) {
    return array.map(item => item.name);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

console.log(mapToNames([john, pete, mary]));
/*

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

*/