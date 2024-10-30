Description :

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
    // TODO
    //PREP [Parameters, Returns, Examples, Psuedo-code]
        // Parameters:
            // will take array of names
            // it must display text
    
        //  Psuedo-code:
            // check for empty arrays
            // if array return a string with the name and extra text
            // if array = 3 return 3 names + string
            // if array > 3 return 2 names + string  = names.length - 2
            let text = 'like this' ;
            if (names && names.length === 0) {
                return `no one likes this`
            } else {
                for (const name of names){
                    if(names.length === 1) {
                        return `${name} likes this`
                    } else if(names.length === 2) {
                        let [first, second] = names
                        return `${first} and ${second} ${text}`
                    } else if (names.length === 3) {
                        let [first, second, third] = names
                        return `${first}, ${second} and ${third} ${text}`
                    } else {
                         let [first, second] = names
                        return `${first}, ${second} and ${names.length - 2} others ${text}`
                    }
                }
               
            }
    
  }
  
        // Returns:
            //   console.log(likes([])) // -> Examples = 
            //   console.log(likes(['Peter'])) // -> Examples = 'Jacob and Alex like this'
            //   console.log(likes(['jacob', 'Alex'])) // -> Examples = 'Jacob and Alex like this'
            //   console.log(likes(['Max', 'John', 'Mark'])) // -> Examples = 'Max, John and Mark like this'            
              console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) // -> Examples ='Alex, Jacob and 2 others like this'  