// Description :

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// Solution : 

function isPalindrome(x) {
    // your code here
        // PREP [Parameters, Returns, Examples, Psuedo-codes]
              // Parameters :
                  // takes in a string
                  // reverses the string
                  // returns boolean
    
              // Psuedo-code :
                  // split & reverse string
                  // if reverse string == string return ture else false
    
    return x.toLowerCase() === [...x].reverse().join('').toLowerCase()
                  
    
  }
              // Rerturn :
                  //  isPalindrome("aba") -> Example = true