// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    //Code here
    //PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters:
            // will take in a string
            // move the first letter to the end of each string and add ay to it
            // don't mess with the punctuation marks
            // return tampered string
    
        // Psuedo-code:
            // convert string to array
            // remove the firt letter of each element 
            // add the remove letter to the end of the string + ay
            // return new string 
    
     return str.split(' ')
          .map(word => {
       // check for alphabeths only
       const isAlphabetic = word.split('').every(char => 
          (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
        );
       
           return isAlphabetic ? word.slice(1) + word.charAt(0) + 'ay'  : word 
        }).join(' ')
  
  }
        // Returns:
              pigIt('Pig latin is cool') // -> Example = 'igPay atinlay siay oolcay'
              pigIt('This is my string') // -> Example = 'hisTay siay ymay tringsay'