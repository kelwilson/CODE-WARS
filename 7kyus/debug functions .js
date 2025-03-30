// Description :

// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)


// Solution :

function multi(arr) {
    return arr.reduce((a,b) => a*b);
  }
  function add(arr) {
    return arr.reduce((a,b) => a + b, 0);
  }
  function reverse(str) {
    return str.split('').reverse().join('');
  }