// Description :

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!


// Solution :

function formatMoney(amount){
    // your formatting code here
        //PREP [Parameters, Returns, Examples, Psuedo-codes]
            // Parameters :
                // takes in a float 
                // returns a string amount in dollars and cents
            // Psuedo-codes : 
                // 
    return '$' + amount.toFixed(2)
  }
            // Returns :
                // formatMoney(39.99) -> Examples = '$39.99'

// Solution 2:

function formatMoney(amount){
    const usd = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      useGrouping: false
    });
    return usd.format(amount);
  }