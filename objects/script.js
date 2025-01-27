function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

  const sampleArray = [1, 2, 3, 4, 5, 6];

  console.log(sumOfTripledEvens(sampleArray));

  /*

  As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

    Take in an array.
    For every even number, it will triple it.
    Then it will sum all those even numbers.

Can you try thinking of how you could implement a function like that using pseudocode?

    We need to perform an operation only on the even numbers.
    We need to transform those numbers by multiplying them by 3.
    Finally, we need to add the result up from the previous transformation.

1. Map method
2. Filter method
3. Reduce method

*/

