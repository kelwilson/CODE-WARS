// Description :

// Write a function that:

// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// Soluton :
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }

  // Solution 2 :

  const isIntArray = arr => {
	try {
  	return arr.every(Number.isInteger)
  } catch(e) {
    return false
  }
}