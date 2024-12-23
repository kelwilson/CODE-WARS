// Description :

// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```


// Solution :
var templateStrings = function(noun, adjective) {
    // PREP [Parameters, Returns, Examples, Puedo-codes]
        // Parameters :
            // takes in two strings 
            // returns a template string
        // Psuedo-codes :
            // compute the two strings using ES6 template literals 
            // return the new string 
    return `${noun} are ${adjective}`
  }
      // Returns :
         // templateStrings(\'Animals\', \'Good\') -> Example = 'Animals are Good'