// Questions :

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// Solution :
function sum (numbers) {
  
  // PREP [Parameters, Returns, Examples, Psuedo-code]
      // Parameters :
          // takes in an array of both positive & negative values or non-integers
          // if no number in the array return 0
          // else return the sum of the array
  
      // Psuedo-codes :
          // check if array.length === 0 || if array has valid numbers if not return 0
          // loop through array and sum all digits in the array 
//   || numbers.some(item => typeof item === 'number')
  if (numbers.length === 0 )return 0
  return numbers.reduce((acc, cur) => +acc + +cur, 0)
}
      // Return :
          // sum([1, 5.2, 4, 0, -1]) -> Example : 9.2