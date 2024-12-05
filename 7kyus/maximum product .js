// Description :
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
// 2 ∗ 3 = 6
//  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
// 5 ∗ 10 = 50
//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
 
// − 2 ∗ 7 = −14
//  −2∗7=−14 

// Solution :
function adjacentElementsProduct(array) {
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
          // Parameters :
              // takes in a number of both + & - integers
              // return the max product of array[0] * array
          // Psuedo-codes :
              // create a new array
              // loop through array and multiply adjacent elements
              // push the product into new array
              // loop through new array & return max product
    return array.map((ele, i, arr) => i < arr.length - 1 ? ele * arr[i + 1] : - Infinity). reduce((a,b) => Math.max(a,b))
  
  }
          // Returns :
              // adjacentElementsProduct([5, 8]) -> Example = 40
            
// Solution 2: 

const adjacentElementsProduct = arr =>
    arr.slice(1).reduce((acc, val, idx) => Math.max(acc, val * arr[idx]), -1/0);