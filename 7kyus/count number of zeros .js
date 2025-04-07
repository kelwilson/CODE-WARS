// Description :

// Create an algorithm to count the number of zeros that appear between 1 and N.

// Examples
//  10  -->   1  // 10
//  20  -->   2  // 10, 20
// 100  -->  11  // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// 200  -->  31


// Solution :

function countZeros(n) {
    // code here
        // PREP [Parameters, Returns, Examples, Psuedo-codes]
            // Parameters :
                // takes in a number
                // return count of zeros from 1 to num
            // Psuedo-code :
                // loop through num
                // check for num of zeros in every index | filter out zero's
                // return count of zero's
    let numArr = []
    for(let i=1; i <= n; i++){
      numArr.push(i)
    }
    let strNum = numArr.join('')
    let combine = strNum.split('').filter(num => num === '0').length
    return combine
  }
            // Return :
                // countZeros(200) -> Example = 31