// Description :

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


// Solution :

function shorterReverseLonger(a,b){
    // PREP [Parameters, Retrurns, Examples, Psuedo-codes]
        // Parameters :
            // takes in two string
            // return a combine sring while reversing the shortest string and placing it at the middle
        // Psuedo-code :
            // check for the length of both strings
            // place the longest string at the begining and the end while placing the reversed short string in the middle
return a.length === b.length ?  b + a.split('').reverse().join('') + b : a.length > b.length ? b + a.split('').reverse().join('') + b : a + b.split('').reverse().join('') + a;
}
        // Return :
            // shorterReverseLonger("first", "abcde") -> Example = "abcdetsrifabcde"