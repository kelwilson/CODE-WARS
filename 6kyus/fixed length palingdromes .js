// Description :

// Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.

// You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.

// Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.

// More examples in the test cases. Good luck!


// Solution :

function palin(a,b){
	const n = (10 ** ((a-1)/2|0) + b - 1).toString();
	return Number(n + [...n].reverse().join('').slice(a%2));
}