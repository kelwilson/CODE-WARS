// Description :

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// Solution 1:
String.prototype.isUpperCase = function() {
    // your code here
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        //  Parameters :
            // create a method that checks for case sensitivity
        //  Psuedo-codes :
            // check if the string calling the method is equal to its upperCase value
      return this.toString() === this.toUpperCase()
        
  }


// Solution 2:

String.prototype.isUpperCase = function() {
    // your code here
     // PREP [Parameters, Returns, Examples, Psuedo-codes]
        //  Parameters :
            // create a method that checks for case sensitivity
        //  Psuedo-codes :
            // check if the string calling the method is equal to its upperCase value
  //   const hasLetters = /[a-zA-Z]/.test(this);
      return this.valueOf() === this.toUpperCase()
        
  }