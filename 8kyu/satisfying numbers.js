// DEscription :

// 2520 is the smallest number that can be divided by each of the integers from 1 to 10 without any remainder.
// Find the smallest positive number that is evenly divisible by all of the integers from 1 to n, (in this kata, 1≤n≤401≤n≤40).
// For example:
// 5 --> 60      // 1 to 5 can all divide evenly into 60
// 10 --> 2520

// Solution :
function smallest(n) {
    //code me
          // PREP [Parameters, Returns, Examples, Psuedo-codes]
              // Parameters :
                  // takes in a number 
                  // return the smallest number that can evenly be divided by integers from 1 to 10
    //   let divide = []
    //   for(let i= 1; i <= n; i++) {
    //       if(i % n === 0) {
    //         divide.push(i)
    //       }
    //   }
    // //   console.log(n)
    //   console.log(divide)
    //  let small = Math.min(...divide)
    //  console.log(small)
    //   return small
    //   return n
      function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = lcm(result, i);
        }
        return result;
    }
              // Retruns :
                  // smallest(9) === 2520 -> Examples = 'Sorry, try again.