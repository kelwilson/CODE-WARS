// Description :

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


function take(arr, n) {
    // Your code here
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
          // Parameters :
              // takes in an array of numbers and a number
              // return the first elements of the given number 
          // Psuedo-codes :
              // create a new array 
              // loop throuh given array
              // push the first elements by the given number
              // return new array
    return arr.slice(0, n)
  }
          // Returns :
                take([0, 1, 2, 3, 5, 8, 13], 3) //-> Example = [0, 1, 2]