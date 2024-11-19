// Description :

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


// Solution :
function divisibleBy(numbers, divisor){
    //PREP [Parameters, Returns, Examples, Psuedo-codes]
        //  Parameters:
            // takes in an array of numbers and an integer
            // return the numbers divible by the integer in a new array
    
        // Psuedo-codes:
            // create a new array
            // loop through array
            // check if number[i] % divisor === 0 then push number into new array
            // return new array
    return numbers.filter(num => num % divisor === 0)
  
  }
        //Returns 
            // divisibleBy([1,2,3,4,5,6], 2) -> Example = [2,4,6]