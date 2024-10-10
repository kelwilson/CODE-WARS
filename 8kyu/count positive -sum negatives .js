// Description:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//Solution:
function countPositivesSumNegatives(input) {
    // your code here
    //PREP [Parameters, Return, Example, Psuedo-codes]
    //check for null || empty array
    //if array check for count of positives 
    // check for negatives then add all negatives
    // return a new array with total positives in index1 & negatives in index2
    //if null -> return []
    //else -> loop and check for the count of +num
    //then -> check for & add all -num
    // return -> [+num, -num]
    if( input === null || input.length === 0) return []
    let posCount = input.filter(num => Math.sign(num) === 1 ).length
    let sumNegatives = input.filter(num => Math.sign(num) === -1).reduce((acc, c) => acc + c, 0)
    return [posCount, sumNegatives]
  }

//   Shorter-Solution:
//  function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }