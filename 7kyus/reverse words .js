// Description :

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// Solution :
function reverseWords(str) {
    // Go for it
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
          // takes in a string 
          // return reverse string
        // Psuedo-codes :
          // split string
          // reverse each word 
          // join string 
          // return joined string 
    return str.split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ')
    
  
  }
        // Returns :
            reverseWords('apple') // -> Example = 'elppa'
