//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
var primes = getPrimes(10000);

function checkPrimes(n){
	var max = 0;
	for (var i = 0; i < primes.length; i++){
		if (n%primes[i] == 0){
			max = primes[i];
		}
	}
	return max;
}

console.log(checkPrimes(600851475143)); //6857