// Description :

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// Solution :
function nameShuffler(str){
    //Shuffle It
        //PREP [Parameters, Returns, Examples, Psuedo-code]
              // Parameters :
                  // Takes in a fullname as a string
                  // shuffle the name changing the position of the first name and the last name
              // Psuedo-code :
                  // split the string
                  // reverse the array
                  // return the joined string
  //   console.log(str)
    return str.split(' ').reverse().join(' ')
  
  }
              // Returns :
                  // nameShuffler('john McClane') ->    Example = 'McClane john'