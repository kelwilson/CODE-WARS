


// Solution :
function noSpace(x){
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // Takes in a string with spaces
            // return a new string with no spaces
        // Psuedo-codes :
            // split the string
            // return joined string
    return x.split(' ').join('')
  
  }
        // Returns :
            // '8aaaaa dddd r     ' -> Example = '8aaaaaddddr'


// Solution 2:

function noSpace(x){
    let arr =  x.split(' ');
    return arr.reduce((a,b)=>a+b);
   }

//  Solution 3:
function noSpace(x){
    return [...x].filter(item => item !== ' ').join('')
}