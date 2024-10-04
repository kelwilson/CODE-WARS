// Description:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//Solution:
function stringToArray(string){

	// code code code
  //PREP = [Parameters, Return, Example, Psuedo-code]
  // create a varable to hold the new array & split the string into single words
  let wordArr = string.split(' ')
  
  //return the split words as an array
  return wordArr;

}