// Description :

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'


// Solution :
 
function aliasGen(first, last){
    // Code Here
  // PREP [Parameters, Returns, Examples,Psuedo-codes]
      // Parameters:
          // takes in a name of two string firstname and surname 
          // already has two objects of alias's 
          // return alias according to the alias that matches the first letter of the firstname and surname
      // Psuedo-codes :
          // if strings contains number - "Your name must start with a letter from A - Z."
          // check if first letter of each first name and surname corresponds with object names
          // retrun the names that matches the letters of both the first name and the surname
// if (/\d/.test(first ) || /\d/.test(last)) {
//   return "Your name must start with a letter from A - Z."
// }
//   let firstFirst = first.slice(0,1).toUpperCase()
//   let lastFirst = last.slice(0,1).toUpperCase()
//    return firstName['firstChart'] + ' ' + surname['lastFirst']
  
  if (!first[0].match(/[a-z]/i) || !last[0].match(/[a-z]/i)) {
    return "Your name must start with a letter from A - Z.";
  }

  // Extract and capitalize the first letters
  const firstInitial = first[0].toUpperCase();
  const lastInitial = last[0].toUpperCase();

  // Check if initials exist in alias objects
  const firstAlias = firstName[firstInitial];
  const lastAlias = surname[lastInitial];

  if (!firstAlias || !lastAlias) {
    return "Your name must start with a letter from A - Z.";
  }

  // Return the alias
  return `${firstAlias} ${lastAlias}`
 
  
  
//   console.log(surname)
}
      // Returns :
         // aliasGen("Mike", "Millington") -> Example = "Malware Mike"
         // aliasGen("Daisy", "Petrovic") -> Example = "Data Payload"