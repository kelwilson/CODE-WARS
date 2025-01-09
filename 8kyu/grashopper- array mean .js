// Description :

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// Solution :
function findAverage(nums) {
    // Code here
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters : 
            // takes in an array of numbers
            // returns the average mean of the numbers
    
        // Psuedo-codes :
            // add all numbers in the array 
            // divide sum by the array.length
            // return result
    console.log(nums)
    return nums.reduce((acc,cur) => acc + cur, 0)/ nums.length
    
  }
        // Returns :
            // findAverage([1, 3, 5, 7]) -> Examples = 4