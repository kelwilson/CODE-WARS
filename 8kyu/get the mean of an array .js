//Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


//Solution:
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    //PREP [Parameters, Returns, Examples, Psuedo-codes]
    //loop through array and sum the elements of the array -> arr.reduce =sum
    //get the average-> sum / arr.length 
    //return the rounded number
    return Math.trunc(marks.reduce((acc, cur) => acc + +cur, 0) / marks.length)
  }