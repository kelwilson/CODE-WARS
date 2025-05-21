// Description :

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!

// Solution :
function firstNonConsecutive (arr) {
    // PREP [Parameters, Returns, Examples, Pseudo-codes]
          // Parameters :
              // takes in an array of numbers
              // should return null if they are consecutive numbers or the first non consecutive number
          // Pseudo-codes :
              // loop through array 
              // if num[i + 1] - num[i] == 1 return null
              // if num[i + 1] - num[i] != 1 return num[i + 1]
    if(arr.length < 2) return null
    
   for(let i =0; i < arr.length - 1; i++){
     if(arr[i + 1] - arr[i] > 1) return arr[i + 1]
   }
    return null
  
  }
          // Returns :
              // firstNonConsecutive([1,2,3,4,6,7,8]) -> Example = 6

// Solution 2:

const firstNonConsecutive = arr => [...arr.filter( (n, i) => ! arr.includes( n - 1 ) ), null ][1];

// Solution 3:

function firstNonConsecutive (arr) {
  if(arr.length < 2) return null;

  return arr.find((num, i) => i < arr.length - 1 && arr[i + 1] - num  > 1) || null;
}

OR 

const firstNonConsecutive = arr => arr.find((n,i)=> i && n - arr[i - 1] != 1) ?? null;