// Description :

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

// Solution :
function cubeChecker(volume, side){
    // PREP [Parameters, Results, Examples, Psuedo-codes]
        // Parameters :
            // takes in the volume and length of a side
            // check if the object is a cuboid or not
    
        // Psuedo-codes :
            // if volume modules side === 0
            // return true else false
  //   if(volume <= 0 || side <= 0) return false
  //   return volume % side === 0 ? true : false;
  //   return volume > 0 && side > 0 && volume % side === 0;
    if (volume <= 0 || side <= 0) return false;
    return Math.cbrt(volume) === side;
  };
        // Return :
            // cubeChecker( -8,-2) -> Example = false
            // cubeChecker( 125, 5) -> Example = true 

//   solution 2 :
  var cubeChecker = function(volume, side){
    return side > 0 && Math.pow(side, 3) === volume;
  };
