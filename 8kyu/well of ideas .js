// Description :

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
//  If there are no good ideas, as is often the case, return 'Fail!'.


// Solution :
function well(x){
    console.log(x)
  //   PREP [Parameters, Returns, Examples, Psuedo-codes]
          // Parameters :
              // takes in an array of string
              // return corresponding string
    
          // Psuedo-codes :
              // create count to store the number of good
              // loop through x & store the num of good in count
              // if good count > 2 return 'I smell a series!'
              // else return 'Publish!'
              // if !good return 'Fail!'
  
          let good = 'good'
          let goodCount = 0
          
    // Count occurrences of "good" in the array
      for (const str of x) {
          if (str === good) {
              goodCount++;
          }
      }
  
      // Determine the result based on the count
      if (goodCount > 2) {
          return 'I smell a series!';
      } else if (goodCount > 0 && goodCount <= 2) {
          return 'Publish!';
      } else {
          return 'Fail!';
      }
  
  }
          // Returns :
             well(['bad', 'bad', 'bad']) // -> Example ='Fail!'

  // Solution 2:
  const well = (x) => {
    const goodCount = x.filter((idea) => idea === 'good').length;

    return goodCount < 1
        ? 'Fail!'
        : goodCount < 3
        ? 'Publish!'
        : 'I smell a series!';
};