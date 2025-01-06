// Description :

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).


function billboard(name, price = 30){
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in a name string and a price number
            // returns the total price of displaying the name 
    
        // Psuedo-code :
            // check the length of the string
            // multiply the length of the string from the given price
            // return total price 
  //   return name.length * price
//    return name.length/(1/price)
  //   return name.repeat(price).length
  
  // } 
  //   if (typeof name !== "string" || name.trim().length === 0) {
  //     return -1; // Invalid name
  //   }
  
  //   // Validate 'price' must be a positive integer
  //   if (typeof price !== "number" || !Number.isInteger(price) || price <= 0) {
  //     return -1; // Invalid price
  //   }
  
  //   let sum = 0;
  
  //   // Use a loop to simulate multiplication
  //   for (let i = 0; i < name.length; i++) {
  //     sum += price;
  //   }
  
  //   return sum;
   
  } 
        // Returns :
            // billboard("Jeong-Ho Aristotelis") -> Example = 600
            // billboard("Hadufuns John",20) -> Example = 260

    // solution :

    function billboard(name, price = 30) {
        return name.split('').reduce((sum) => sum + price, 0); 
      }

    // Solution 2:
    const billboard = (name, price = 30) =>
        [...name].reduce(pre => pre + price, 0);