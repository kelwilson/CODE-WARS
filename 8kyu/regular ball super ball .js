// Description :
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// Solution :
var Ball = function(ballType) {
  // your code goes here
  // PREP [Parameters, Returns, examples, Psuedo-codes
      // Parameters :
          // takes in a single argument
          // returns 'regular' if empty else 'super'
  
      // Psuedo-codes : 
          // if ballType = '' then 'regular' else 'super'
  this.ballType = ballType || 'regular';
};
      // Returns : 
          // new Ball().ballType  ->  Example : 'regular"