//  Description :

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


//  Solution :

function vowelOne(s){
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in a string 
            // checks the string at each index for vowels and non vowels
            // if vowel return 1 else 0

        // Psuedo-codes :
            // split string
            // loop through the array check at each index if string is vowel
            // if vowel return 1 else return 0
// ...
const vowels = /^[aeiou]$/i; 

    const words = s.toLowerCase().split('')
    return words.map(word => word.match(vowels) ? 1 : 0).join('')
   
}
        // Returns :
            // vowelOne( "vowelOne" ) -> Exapmle = "01010101"