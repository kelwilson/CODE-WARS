// Description:
// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Solution:
function reverseWords(str){

    // PREP [Parameters, Return, Examples, Psuedo-code]
    // split string into an array - split()
    // reverse the words in the array - reverse()
    // to the array back into a string - join()
    // return the new string 
    return str.split(' ').reverse().join(' '); // reverse those words
    
  }