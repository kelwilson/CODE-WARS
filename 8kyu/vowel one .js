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

    //using array.from below instead of split 

    // return Array.from(s, char => vowels.has(char) ? 1 : 0).join('');


}
        // Returns :
            // vowelOne( "vowelOne" ) -> Exapmle = "01010101"


//  Solution 2:

function vowelOne(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Define vowel list
    return s
        .toLowerCase()
        .split('')
        .map(char => vowels.includes(char) ? 1 : 0)
        .join('');
}

// Example usage:
// console.log(vowelOne("vowelOne")); // "01010101"


function vowelOneRegex(s) {
    const vowels = /^[aeiou]$/i;
    return s.toLowerCase().split('').map(char => vowels.test(char) ? 1 : 0).join('');
}

function vowelOneSet(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s.toLowerCase().split('').map(char => vowels.has(char) ? 1 : 0).join('');
}

const testString = "abcdefghijklmnopqrstuvwxyz".repeat(10000); // Large test case

// Measure Regex Performance
const startRegex = performance.now();
vowelOneRegex(testString);
const endRegex = performance.now();
console.log(`Regex method took: ${(endRegex - startRegex).toFixed(4)} ms`);

// Measure Set Lookup Performance
const startSet = performance.now();
vowelOneSet(testString);
const endSet = performance.now();
console.log(`Set method took: ${(endSet - startSet).toFixed(4)} ms`);

