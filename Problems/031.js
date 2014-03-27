// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?


//this is a very slow brute force solution. Has much room for improvement
var arr = [];
var a = 1, b=2, c=5, d=10, e=20, f=50, g=100;
for (var aa = 0; aa <= 200/a; aa++){
for (var bb = 0; bb <= 200/b; bb++){
for (var cc = 0; cc <= 200/c; cc++){
for (var dd = 0; dd <= 200/d; dd++){
for (var ee = 0; ee <= 200/e; ee++){
for (var ff = 0; ff <= 200/f; ff++){
for (var gg = 0; gg <= 200/g; gg++){
	if (aa*a + bb*b + cc*c + dd*d + ee*e + ff*f + gg*g == 200){
		arr.push('yep');
	}
}
}
}
}
}
}
}

console.log(arr.length + 1); //73682