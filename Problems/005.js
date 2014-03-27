// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function test(n){
	for (var i = 2; i <=20; i++){
		if (n%i != 0){
			return false;
		}
	}
	return true;
}

for (var i = 1; i < 1000000000; i++){
	if (test(i)){
		console.log(i); //232792560
		return;
	}
}