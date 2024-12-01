// Description :

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2


// Solution :
function incrementer(nums) { 
    // code goes here
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in an array
            // modify the array by incrementing every element by its position
            // if element + index > 9 -> take away the first number and input the second
    
        // Psuedo-code :
            // create a new array
            // loop through the array and increment by the index +1
            // if ele + index is a double digit remove index 0
            // return new array
    return nums.map((num, i) => {
  //     let numPlus = num + (i +1)
  //     if( numPlus > 9) {
  //       return Number(numPlus.toString().slice(1))
  //     } else {
  //       return numPlus
  //     }
      return num + (i +1) > 9 ? Number((num + (i +1)).toString().slice(1)) : num + (i + 1);
    })
  }
        // Returns :
            // incrementer([4, 6, 7, 1, 3]) -> Example = [5, 8, 0, 5, 8]
// Solution 2:
    // %10 takes the result modulo 10, which ensures the output is always a single digit (0–9)
            const incrementer = (nums) => nums.map((n, idx) => (n + idx + 1) % 10)