// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
var a = 0; //sum of squares
var b = 0; //square of sums
for (var i = 1; i <= 100; i++){
	a += Math.pow(i, 2);
	b += i;
}
b = Math.pow(b, 2);
console.log(b - a); //25164150
