function filterRange (arr, a, b) {
return arr.filter(number => number >= a && number <= b);

}

const arr = [5, 3, 8, 1];
console.log(filterRange(arr, 3, 7));

/*

1. takes an array
2. looks for elements with values higher or equal to a and lower or equal to b
3. return the result as an array

*/