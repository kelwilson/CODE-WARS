// Description :

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


function duckDuckGoose(players, goose) {
    // ...
      // PREP [Parameters, Returns, Examples, Psuedo-codes]
          // Parameters :
              // Takes in an array of numbers in circles and an idex
              // returns the element at the given index
    
          // Psuedo-code :
              // Loop through the array in circles using the modules operator
              // until you find the element at the given index
    console.log(players)
      let ele = goose % players.length;
    console.log(ele)
      return players[ele === 0 ? players.length -1 : ele - 1].name
          
  }
          // Returns :
              // duckDuckGoose(players, 1) -> Example = "a"
              // duckDuckGoose(players, 12) -> Example = "b"

// Solution 2:

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;


// Solution 3:

function duckDuckGoose(players, goose) {
    let circle = goose;
    while(players.length < circle) {
      circle -= players.length
    }
    return players[circle - 1 ].name
  }