//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n){
	n = n.toString();
	return n == n.split('').reverse().join('');
}

var max = 0;
for (var i = 100; i < 1000; i++){
	for (var j = 100; j < 1000; j++){
		if (isPalindrome(i*j) && i*j > max){
			max = i*j;
		}
	}
}

console.log(max); //906609