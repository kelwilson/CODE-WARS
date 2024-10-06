// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Solution:
function abbrevName(name){

    // code away
    //PREP [Parameters, Return, Example, Psuedo-code]
    //split the string into an array 
    //get the first letters of the two words
    // convert the first letters to capital letter
    // Add a dot at the middle to seperate them
  let newName = name.split(' ')
  let first = newName[0]
  let second = newName[1]
  let newFirst = first.charAt(0).toUpperCase()
  let newSecond = second.charAt(0).toUpperCase()
  return newFirst + '.' + newSecond
}


//Second Solution:
const abbrevName = name =>
    name
      .split` `
      .map(part => part[0].toUpperCase())
      .join('.')

