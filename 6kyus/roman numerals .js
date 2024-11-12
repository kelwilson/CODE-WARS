// Description :

// Range from 0 to Roman Numerals

// console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]
// console.log(0..IV) //[0,1,2,3]
// console.log(0..III) //[0,1,2]
// console.log(0..XIX) //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]



// Solution with regex :

Object.setPrototypeOf(
    Number.prototype, 
    new Proxy(Number.prototype, {
      get(target, prop, receiver){
        return Array.from({length: RN(prop) - receiver}, (_,i) => receiver + i);
      }
    })
  );
  
  function RN(roman){
    const conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);

