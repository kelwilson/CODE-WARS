// Description :

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// Solution :

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
        // PREP [Parameters, Returns, Examples, Psuedo-codes]
            // Parameters :
                // takes in an array of scores and a single score
                // calculate the average score by adding the array score + the single score
                // return true if score is > average || false
    
            // Psuedo-code :
                // calculate the average points
                // compare average with your points
                // if average > points ? true :false 
        const completeArr = [...classPoints, yourPoints]
        const  averagePoints = completeArr.reduce((a, b) => a + b, 0 ) 
         return yourPoints > averagePoints / completeArr.length ? true : false;
  }
            // Return :
                // betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) -> Example = true