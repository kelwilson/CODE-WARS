// Description:
// We have the number 12385 . We want to know the value of the closest cube but higher than 12385. The answer will be 13824 .

// Now, another case. We have the number 1245678 . We want to know the 5th power, closest and higher than that number. The value will be 1419857.

// We need a function find_next_power or findNextPower that receives two arguments, a value val , and the exponent of the power,  pow_ , and outputs the value that we want to find.

// Let'see some cases:

// (12385, 3) ==> 13824
// (1245678, 5) ==> 1419857
// The value, val will be always a positive integer.
// The power, pow_ , always higher than 1 .



//Solution:
function findNextPower(val, pow_) {
    //your code here
  // PREP [Parameters, Return, Example, Psuedo-codes]
  //check if val is 1 > 2 ** pow_
  //loop through val 
  //check if num ** pow_ is greater than val
  // if true return num ** pow_
  if(val === 1) {
    return Math.pow(2, pow_)
  }
  for(let i =1; i <= val; i++) {
    if(Math.pow(i, pow_) > val ){
      return Math.pow(i, pow_)
}
  }
  
}