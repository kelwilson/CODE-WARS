// Description:
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// Trying New Solution 
function merge (a,b) {
  let joined = []
  let newB;
  if (a.length === b.length) {
    for(let i = 0; i< a.length; i++){
      for(let j = 0; j< b.length; j++){
        joined.push(a[i], b[j])
      }
    }
    return joined
  } else if(a.length < b.length) {
   newB = b.slice(0, a.length)
   for(let i = 0; i< a.length; i++){
    for(let j = 0; j< b.length; j++){
      joined.push(a[i], b[j])
    }
  }
}
return [...joined, ...newB]
}

console.log(merge(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))

// // Solution :
// function mergeArrays(a, b) {
//     // your code here
//         // PREP [Parameters, Returns, Examples, Psuedo-codes]
//             // Parameters :
//                 // takes in two arrays
//                 // one of string letters and the other of integer values
//                 // merge the array with one character/ digit
//                 // return the new array
    
//             // Psuedo-codes :
//                 //
//     let merge = []
//     let i =0;
//     let j = 0;
//       while(i < a.length && j < b.length){
//         merge.push( a[i], b[j])
//         i++;
//         j++; 
//       }
   
//       // If any elements remain in `a`, add them
//       while (i < a.length) {
//           merge.push(a[i]);
//           i++;
//       }
  
//       // If any elements remain in `b`, add them
//       while (j < b.length) {
//           merge.push(b[j]);
//           j++;
//       }
  
//       return merge;
  
//   }
//             // Return :
//                 // mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]) -> Example = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]

// // Solution 2:
// function mergeArrays(a, b) {
//     return a.length ? [a[0], ...mergeArrays(b, a.slice(1))] : b;
//   }
  
// //   Solution 3 :

// function mergeArrays(a, b) {
//     // your code here
//     var returnArray = [];
//     var counter = 0;
//     while (a[counter] || b[counter] ){
//       if(a[counter]){
//         returnArray.push(a[counter]);
//       }
//       if(b[counter]){
//         returnArray.push(b[counter]);
//       }
//       counter++;
      
//      }
//      return returnArray;
//   }