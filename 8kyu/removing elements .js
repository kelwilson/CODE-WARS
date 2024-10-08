//Description:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// Solution:
function removeEveryOther(arr){
    //your code here
    //   PREP [Parameters, Return, Example, Psuedo-code]
    // remove the second element an arrray
    // [1,2,3,4,5,6] -> [1,3,5]
    return arr.filter((ele, i, a) => a.splice(ele[i+1], 1))
  }