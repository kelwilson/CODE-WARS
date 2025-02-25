// Description :

// Write a function which converts the input string to uppercase.

// Solutiom :
function makeUpperCase(str) {
    // Code here
    // PREP [Parameter, Returns, Examples, Psuedo-codes]
              // Parameters :
                    // takes in a Lowercase string 
                    // returns a UpperCase string
    
              // Psuedo-codes :
                    // check if string is a valid string
                    // convert the string to uppercase
                    // return converted string
    return str.length < 1 ? '' : str.toUpperCase();
    
  }
              // Returns :
                  // makeUpperCase("hello") -> Examplen = "HELLO"


// Solution 2: 

function makeUpperCase(str) {
    return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
  }