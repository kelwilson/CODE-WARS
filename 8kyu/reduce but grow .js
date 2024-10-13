// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution:
function grow(x){
    //PREP[Parameters, return, Example, Psuedo-codes]
    // loop through the array -> [1,2,3,4,5]
    // multiple each element at an index against the next index -> 1 * 2 * 3 * 4 = 24
  return x.reduce((acc, c) => acc * c)
  }