var sieve = require('sieve');
var _ = require('underscore');
//var arr = sieve(1000000);
var MAX = 1000000;
var primes = sieve(MAX);
var truncPrimes = sieve(MAX);

Number.prototype.isPrime = function (){
	return _.contains(primes, this.valueOf());
}
Number.prototype.isTruncPrime = function (){
	return _.contains(truncPrimes, this.valueOf());
}

Number.prototype.remove = function (){
	var index = truncPrimes.indexOf(this.valueOf());
	if (index > -1){
		truncPrimes.splice(index, 1);
	}
}

Number.prototype.rightTrunc = function (){
	return Math.floor(this.valueOf()/10)
}

Number.prototype.leftTrunc = function (){
	return this.valueOf() % Math.pow(10, this.valueOf().toString().length - 1);
}

var count = 0;
var i = 1;
while (i < MAX){
	i++;
	if (i.isTruncPrime()){
		var num = i;
		while (num){
			if (!num.isPrime()){
				if (i == 3797) console.log('removing', i, num);
				i.remove();
				num = 0;
			} else {
				num = num.rightTrunc();
			}
			
		}
	}
	if (i.isTruncPrime()){
		var num = i;
		while (num){
			if (!num.isPrime()){
				i.remove();
				num = 0;
			} else {
				num = num.leftTrunc();
			}
		}
	}
	if (i.isTruncPrime()){
		count++;
		console.log(_.first(truncPrimes, count));
	}
}

console.log(_.first(truncPrimes, 20));