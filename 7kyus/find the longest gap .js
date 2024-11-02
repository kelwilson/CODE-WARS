// Descrition:

// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.


function gap(num) {
    //code me
  // PREP [Parameters, Returns, Examples,Psuedo-codes]
        // Parameters:
            // takes in a positive number
            // returns a binary gap i.e - a sequence of consecutive zeros between ones 
//   console.log('😍')
  
        // Psuedo-codes:
            // get the binary representation of a number - (num >>> 0).toString(2)
            // convert to string then to array
            // loop through the binary numbers and check zeros that are in between ones and return the total
            // if no zeros between ones return - 0
            // else return zeros count 
   
    const binary = (num >>> 0).toString(2)

    const zeroGroups = binary.split("1").slice(1, -1);

  //  Find the longest sequence of zeros
    const maxZeros = zeroGroups.reduce((max, group) => Math.max(max, group.length), 0);

     return maxZeros;

    // const firstOneIndex = binary.indexOf("1");
    // const lastOneIndex = binary.lastIndexOf("1");
  
    // // Step 4: Check if there are any zeros between the first and last '1'
    // if (firstOneIndex === -1 || lastOneIndex === -1 || firstOneIndex === lastOneIndex) {
    //   // No zeros between ones or there are no '1's at all
    //   return 0;
    // }
  
    // // Step 5: Count zeros between the first and last occurrence of '1'
    // let zeroCount = 0;
    // for (let i = firstOneIndex + 1; i < lastOneIndex; i++) {
    //   if (binary[i] === "0") {
    //     zeroCount++;
    //   }
    // }
  
    // // console.log(zeroCount)
    // return zeroCount;

  
      
}
      // Returns:
            // console.log(gap(9)) // -> Example = 2
            console.log(gap(529)) // -> Example = 4