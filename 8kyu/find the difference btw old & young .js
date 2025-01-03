// Description :

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// Solution :
function differenceInAges(ages){
    // PREP [Parameters,Returns, Examples, Psuedo-codes]
        // Parameters:
            // takes in an array of ages
            // returns an array of youngest age, oldestage and difference
        // Psuedo-codes:
            // create an empty array
            // loop through the ages array
            // get the min age and max age
            // get the difference of the min and max age
            // return the new array with the [min age, max age, difference]
    let minAge = Math.min(...ages)
    let maxAge = Math.max(...ages)
  
  //   return [0, 0, 0];
    return [minAge, maxAge, maxAge - minAge];
  }
        // Returns:
            // differenceInAges([82, 15, 6, 38, 35]) -> Examples = [6, 82, 76]