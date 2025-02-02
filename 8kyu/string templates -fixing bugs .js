// Description :

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature,
// Help Timmy with his string template so it works as he expects!

// Solution :
function buildString(...template){
    // PREP [Parameters, Returns, Examples, Psuedo-codes]
        // Parameters :
            // takes in a bugged string
            // returns the fixed string
        // Psuedo-code :
            // add a '$' before the curly braces
            // add a space behind the comma inside the join method
            // return updated string
return `I like ${template.join(', ')}!` ;
}
        // Returns :
            // buildString('Cheese','Milk') -> Example = 'I like Cheese, Milk!', 'Return the correct String'