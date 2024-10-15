//Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    //PREP [Parameters, Return, Example, Psuedo-code]
    //loop through the array
    // check if element is a number -> if typeOf x[i] = string ? number(x[i])
    // sum all the element in the array -> x[i] += x[i]
    // return the summed value 

    //Solution with reduce
      return x.reduce((acc, cur) => +acc+ +cur, 0)  

    // OR
    // return x.reduce((acc, cur) => acc + +cur, 0)


    //Solution with a for loop
    //   let sum = 0
    //   for( let i = 0; i < x.length; i++) {
    //       sum += Number(x[i])
    //   }
    //   return sum
    
    }