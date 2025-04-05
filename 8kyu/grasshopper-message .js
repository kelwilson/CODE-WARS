// Description :

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'



// Solution :

function greet (name, owner) {
    // Add code here
        // PREP [Parameters, Returns, Examples, Psuedo-codes]
            // Parameters :
                 // takes in two strings
                 // returns a greeting
            // Psuedo-code :
                  // if name == owner ? hello boss : hello guest
    return  name === owner ? 'Hello boss' : 'Hello guest';
  }
            // Returns :
                 //  greet('Daniel', 'Daniel') -> Example 'Hello boss'
  