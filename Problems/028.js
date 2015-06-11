var total = 1;
var current = 1;
var diff = 0;
for (var i = 1; i < 501; i++){
	diff += 2;
	for (var j = 0; j < 4; j++){
		current += diff;
		total += current;
	}
}
console.log(i, total);