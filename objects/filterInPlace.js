function filterRangeInPlace (arr, a, b) {
    const filteredRange = arr.filter(item => item >= a && item <= b);
    arr.length = 0;
    filteredRange.forEach(item => arr.push(item));
}

const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
/*

1. Takes an array (arr)
2. removes from it all values except those that are between a and b.
3. modify the array - do not return anything. 

The test is: a ≤ arr[i] ≤ b

*/