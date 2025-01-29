function unique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

console.log(unique(strings));
/*

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

*/