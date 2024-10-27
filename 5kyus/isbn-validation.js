// Description :
// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// For example:

// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:

// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
// Examples
// 1112223339   -->  true
// 111222333    -->  false
// 1112223339X  -->  false
// 1234554321   -->  true
// 1234512345   -->  false
// 048665088X   -->  true
// X123456788   -->  false




function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  //PREP [Parameters, Results, Examples, Psuedo-code]
     // Parameters:
        // - takes in a string of 10 digit numbers
        // - digits must not be more than 10
        // - the result of the sum of multiplying the index with the integer modules 11 must equal 0
       
    // Psuedo-code:
        // check for lengths of integer string lesser than 10
        // - turn string into an array- isbn.split('')
        // - multiply the integer by the index of the integer +1 - result
        // - the result of the multiplication modulo 11 - result % 11
        // - if final result = 0 - true : else - false 

    //Still don't know why my first soluton failed :
        // if(isbn.length < 10) {
        //     return false
        // } else {
        // let newIsbn = isbn.split('')
        // let why = newIsbn.map((ele, i) => ele * (i + 1))
        //     .reduce((acc, cur) => +acc + +cur, 0)
        // return why % 11 === 0 ? true : false;
        // }
        // console.log(whyNot)

        // Solution worked :
        // if (isbn.length < 10 || isbn.length > 10) {
        //     return false;
        // } else {
        //     let sum = 0;
        //     let newIsbn = isbn.split('');
        //     for (let i = 0; i < newIsbn.length; i++) {
        //         if (newIsbn[i] === 'X' && i === 9) { // 'X' is valid only in the last position
        //             sum += 10 * (i + 1);
        //         } else {
        //             sum += parseInt(newIsbn[i], 10) * (i + 1);
        //         }
        //     }
        //     return sum % 11 === 0;
        // }

        if (isbn.length < 10 || isbn.length > 10) {
            return false;
        } else {
            let newIsbn = isbn.split('');
            let why = newIsbn.map((ele, i, m) => {
                // Check if the last character is 'X' and replace it with 10
                if (m.length === 10 && i === 9 && ele === 'X') {
                 return ele = 10 * (i + 1)
                }
                return parseInt(ele, 10) * (i + 1);
            })
            .reduce((acc, cur) => acc + cur, 0);
        
            return why % 11 === 0;
        }
           
}
    // Results:
        // console.log(validISBN10("1112223339")) //-> Examples = true
        // console.log(validISBN10("1293")) //-> Examples = false
        // console.log(validISBN10("XXXXXXXXXX")) //-> Examples = false
        // console.log(validISBN10("048665088X")) //-> Examples = true