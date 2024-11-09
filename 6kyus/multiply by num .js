// Description :

// Task
// Let's say we have a positive integer, nn. You have to find the smallest possible positive integer that when multiplied by nn, becomes a perfect power of integer kk. A perfect power of kk is any positive integer that can be represented as akak. For example if k=2k=2, then 3636 is a perfect power of kk, but 2727 isn't.
// Examples
// n, k = 100, 3  return  10, #because 10*100 becomes 1000, and 1000 = 10**3
// n, k = 36, 2   return   1, #because 36 is already a perfect square 6**2
// n, k = 72, 4   return  18, #because 18*72 = 1296 = 6**4
// Notes:
// k,n∈Nk,n∈N and 1<n<106, 1<k<101<n<106, 1<k<10
// However, the output may be way larger than 106106.
// If you have trouble seeing the numbers, refresh your page ;-) Please rate this kata. All translations are welcome.



// solution :

function mulPower(n, k) {
    const getM = num => {
      for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) return [i, ...getM(num / i)]
      }
      return [num]
    }
    const ms = getM(n)
    const msUniq = Array.from(new Set(ms));
    return msUniq.reduce((acc, e) => acc * BigInt(e)**BigInt((k + (k - ms.filter(el => el == e).length) % k) % k), 1n)
  }

