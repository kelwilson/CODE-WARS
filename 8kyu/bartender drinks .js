// Description : 

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


// Solution :

function getDrinkByProfession(param){   
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in a string
            // maps it out to the produce according to the table
        // Psuedo-codes :
            // make sure to check for casing 
            // use a switch statement to map the string to their appropriate produces
    const share = param.split(' ');
    const input = share.map(word => word.charAt(0).toUpperCase() + word.toLowerCase().substring(1)).join(' ')  ;
    
  switch(input) {
      case "Jabroni":
      return "Patron Tequila"
      
       case "School Counselor":
      return "Anything with Alcohol"
      
       case "Programmer":
      return "Hipster Craft Beer"
      
       case "Bike Gang Member":
      return "Moonshine"
      
       case "Politician":
      return 	"Your tax dollars"
      
       case "Rapper":
      return "Cristal"
      
      default :
      return "Beer"
  }

}
        // Return : 
            // getDrinkByProfession("jabrOni") -> Example : "Patron Tequila"