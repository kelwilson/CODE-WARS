// Description :
// Let's define two functions:

// S(N) — sum of all positive numbers not more than N
// S(N) = 1 + 2 + 3 + ... + N

// Z(N) — sum of all S(i), where 1 <= i <= N
// Z(N) = S(1) + S(2) + S(3) + ... + S(N)
// You will be given an integer N as input; your task is to return the value of S(Z(N)).

// For example, let N = 3:

// Z(3n) = 1n + 3n + 6n = 10n
// S(Z(3n)) = S(10n) = 55n
// The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.


//Solution 1:
function sumOfSums(n) {
    const total = n * (n + 1n) * (n + 2n) / 6n;
    const sum = total * (total + 1n) / 2n;
    return sum;
  }


// Solution 2:
function sumOfSums(n) {
    // Compute Z(N)
   let ZN = (BigInt(n) * (BigInt(n) + BigInt(1)) * (BigInt(n) + BigInt(2))) / BigInt(6);
 
   // Compute S(Z(N))
   let result = (ZN * (ZN + BigInt(1))) / BigInt(2);
 
   // Return the computed result
   return result;
 
 }