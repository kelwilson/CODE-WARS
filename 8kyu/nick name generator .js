// Description :

// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified



// Solution :

function nicknameGenerator(name){
    //code goes here
        // PREP [Parameters, Returns, Examples, Psuedo-code]
            // Parameters :
                // takes in a string
                // returns a 3 letter if the 3rd letter of the string is consonant
                // returns a 4 letter if the 3rd letter is vowel
                // or error if name is less than 4 characters
    
            // Psuedo-codes :
                // check if string length is not < 4
                // if the 3rd letter is a consonant return 3 letters else 4
    const vowels= ['a', 'e', 'i', 'o', 'u']
    return name.length < 4 ? "Error: Name too short" : vowels.includes(name[2]) ? name.substring(0, 4) : name.substring(0, 3);
                // Note the includes only works on array not on single values
  }
            // Returns :
                // nicknameGenerator("Jimmy") -> Example = "Jim"
                // nicknameGenerator("Sam") -> Example = "Error: Name too short"