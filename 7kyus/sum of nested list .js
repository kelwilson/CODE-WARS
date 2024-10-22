// Description:
// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10


// Solution:

const sumNested = arr => {
    //PREP [Parameters, Returns, Examples, Psuedo-code]
      //   parameters:
        //  the function takes in a nested array of integers
      //   Psuedo-code:
        //  spread all nested array into one array
        //  loop through all arrays 
        //   add all the values and return the result 
      return arr.flat(Infinity).reduce((acc, cur) => +acc+ +cur, 0)
      
    };
      //    Returns:
        // sumNested([[1], []]) -> Example = 1
        // sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]) -> Example = 8;