// Description :

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Solution :
function findAverage(array) {
    // your code here
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in an array of numbers
            // returns the average
        // Psuedo-codes :
            // create a sum variable
            // loop through array while adding each number to the sum
            // divide the sum variable by array.length 
    return !array || array.length === 0 ? 0 : array.reduce((arc, cur) => arc + cur, 0) / array.length;
  }
        // Returns :
            findAverage([1,2,3,4]) // -> Example = 2.5