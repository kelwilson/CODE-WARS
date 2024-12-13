// Description :

// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"


// Solution :
function automorphic(n){
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // check if num is automorphobic or not
            // if the last digits of num ** 2 === num
        // Psuedo-codes :
            // num ** 2
            // if last digits of num ** 2 === num return "Automorphic"
            // else "Not!!"
            let len = n.toString().length
            let num = (n * n).toString().slice(-len)
            return (n == num) ? 'Automorphic' : 'Not!!'
    
  }
        // Returns :
            // automorphobic(1) -> Example = "Automorphic"
            // automorphobic(3) -> Example = "Automorphic"


// Solution 2:
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;