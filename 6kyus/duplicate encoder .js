// Description:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// Solution:
function duplicateEncode(word){
    //PREP [Parameters, Retrurns, Examples, Psuedo-code]
      // Parameters:
          // always takes in a string
          // ignore capitalization
      // Psuedo-code
          // covert characters of the string to lowerCase
          // loop through the string
          // check for identical characters
          // if identical -> ")"
          // else -> "("
        let newWord = word.toLowerCase().split('');
        let string = newWord.map(str => newWord.indexOf(str) ===  newWord.lastIndexOf(str)? "(" : ")" );
        return string.join('');
           
  }
      // Returns:
          duplicateEncode("din") //-> Examples = "((("
          duplicateEncode("Success") // -> Examples = ")())())"
          duplicateEncode("(( @") // -> Examples = "))(("