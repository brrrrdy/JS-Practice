function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);

}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

console.log(sortByAge([john, pete, mary]));

/*

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

*/