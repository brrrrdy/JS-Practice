function copyAndSort(arr) {
return arr.map(item => item).sort();
}

const arr = ["HTML", "JavaScript", "CSS"];

console.log(copyAndSort(arr));
/*

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

*/