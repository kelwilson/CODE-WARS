// Description :

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// Solution :
const genericFunc = (func, num) => func ? func(num) : num

const zero = (func) => genericFunc(func, 0)
const one = (func) => genericFunc(func, 1)
const two = (func) => genericFunc(func, 2)
const three = (func) => genericFunc(func, 3)
const four = (func) => genericFunc(func, 4)
const five = (func) => genericFunc(func, 5)
const six = (func) => genericFunc(func, 6)
const seven = (func) => genericFunc(func, 7)
const eight = (func) => genericFunc(func, 8)
const nine = (func) => genericFunc(func, 9)

function plus(b) {
  return (a) => a+b
}
function minus(b) {
  return (a) => a-b
}
function times(b) {
    return (a) => a*b
}

function dividedBy(b) {
  if (b === 0) return () => 0
  return (a) => Math.floor(a/b)
}