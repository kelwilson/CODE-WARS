// Description :

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// Solution :

function check(a, x) {
    // your code here
        // PREP [Parameters, Returns, Examples, Psuedo-codes]
            // Parameters :
                // takes in an array and a value
                // check if value is contain in the array
    
            // Psuedo-code :
                // loop through array
                // check if given value is found at any index of the array
                // if found return true else false
    
    return a.includes(x)
    
  }
            // Return :
                // check([66, 101], 66) -> Example = true