// Description :

// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// Solution :

function sumDigits(number) {
    // PREP [Parameters, Rerturns, Examples, Psuedo-codes]
          // Parameters :
              // takes in a number
              // return the sum of the absolute value of the number
          // Psuedo-code :
              // turn number into a string 
              // split into an array
              // add and return the values in the array
 return Math.abs(number).toString().split('').reduce((acc, cur) => +acc+ + cur, 0)

}
          // Return :
              // sumDigits(99) -> Example = 18

// Solution 2:

function sum(number) { 
    return number < 10 ? number : number % 10 + sum(Math.floor(number / 10)) ; 
}


