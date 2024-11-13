// Description :

// For any given linear sequence, calculate the function [f(x)] and return it as a string.

// Assumptions for this kata are:

// the sequence argument will always contain 5 values equal to f(0) - f(4).
// the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
// if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.
// Examples (input -> output):
// [0, 1, 2, 3, 4]   -> "f(x) = x"
// [0, 3, 6, 9, 12]  -> "f(x) = 3x"
// [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
// [0, 0, 1, 1, 1]   -> "Non-linear sequence"


// Solution :

function getFunction(sequence) {
    let diff = sequence[1] - sequence[0]
    let linearCheck = sequence.slice(1).every((x, i, arr) => x - sequence [i] == diff)
    if (!linearCheck) return "Non-linear sequence"
    let part1 = diff == 0 ? `` : diff == 1 ? `x` : diff == -1 ? `-x` : `${diff}x`
    let part2 = sequence[0] == 0 ? `` : (diff == 0 ? `` : sequence[0] < 0 ? ` - ` : ` + `) + Math.abs(sequence[0]);
    funcStr = "f(x) = " + part1 + part2
    console.log("func_str", funcStr)
    return funcStr
  }
