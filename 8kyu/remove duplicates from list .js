// Duplicates:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// Solution: 
function distinct(a) {
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters:
            // always takes in an array of positive numbers
            // remove duplicates & return new array
    
        // Psuedo-codes:
            // create a new array
            // loop through array if current !== next push current into new array
            // return new array
    return [...new Set(a)]
    
  }
        // Returns :
           // distinct([1,1,2]) //-> Examples = [1,2]