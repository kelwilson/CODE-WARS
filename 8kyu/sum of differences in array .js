// Description :

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// Solution :
function sumOfDifferences(arr) {
    // PREP [Parameters,Returns, Examples, Psuedo-codes]
         // Parameters :
             // takes in an array
             // returns the sum of the differences between the elements ofthe array
             // returns 0 if array.length is less than 2
         // Psuedo-codes :
              // if array.length < 2return 0
             // else loop through array
             // return the sum of the difference of the elements at each index
     if(arr.length < 2) return 0;
         // Sort the array in descending order
      arr.sort((a, b) => b - a);
 
   // Calculate the sum of differences
       return arr.reduce((acc, cur, i) => {
       if (i === arr.length - 1) return acc; // Skip the last element
       return acc + (cur - arr[i + 1]);
       }, 0);
   //     return arr.sort((a,b) => b-a).slice(1).reduce((acc, cur, i) => acc + (arr[i] - cur, 0)
 }
         // Returns :
             // sumOfDifferences([-3, -2, -1]) -> Examples = 2

// Solution 2:
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Solution 3:
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);