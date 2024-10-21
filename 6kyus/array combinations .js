// Description:
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.


// Solution:
function solve(arr) {
    //   PREP [Parameters, Returns, Examples, Psuedo-code]
    // Parameters:
    //Always takes in an array of arrays
      
    // Psuedo-codes:
    // loop through both arrays
    // check for duplicates in each inner array
    //  if duplicate == true -> skip the identical element in the same array 
    // return a new array with a single element from each of the inner arrays
    // return the count of each new array formed from the previous arrays
    let countArr = arr.map(subarray => new Set(subarray).size)
  

    return countArr.reduce((acc, cur) => acc * cur, 1)
      
    };
    //Returns:
    // solve([[1,2], [4], [5,6]]) // Examples -> 4
    // solve([[1,2], [3,4], [5,6]]) // Examples -> 8