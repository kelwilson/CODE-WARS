// Description :

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Solution :

function contamination(text, char){
    // Code here ;)
      // PREP [Parameters, Returns, Examples, Psuedo-codes]
          // Parameters :
              // Takes in a string a chracter
              // returns a new string where each letter of the old string is replaced by the character
    
          // Psuedo-codes :
              // create a new variable and assign the value to an empty string
              // convert the string into an array
              // loop through the array and and concat the value of the new variable to char
              // return the new variable
  //   let T = text.replace(char)
    let newText = ''
    let str = text.split('')
    for(let i = 0; i < str.length; i++){
      newText += char
    }
    return newText;
    
  }
          // Returns :
              // contamination("","z") -> Examples = ""
              // contamination("_3ebzgh4","&")-> Examples = "&&&&&&&&"

             
// SOlution 2:             
 var contamination = (text, char) => [...text].map(e => e = char).join('')

//  Other Solutions :

 function contamination(text, char) {
    return text.split("").fill(char).join("");
  }
  
  /////////////////////////////////////////////////
  
  function contamination(text, char) {
    return char.repeat(text.length);
  }
  
  /////////////////////////////////////////////////
  
  function contamination(text, char) {
    return text.replace(/./g, char);
  }