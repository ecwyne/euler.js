function fac(x) {
    if (x == 0) {
        return 1;
    }
    var y = x;
    for (var i = 1; i < x; i++) {
        y = y*i;
    }
    return y;
}

var result = 0;
for (var i = 10; i < 2540161; i++) {
    var sumOfFacts = 0;
    var number = i;
    while (number > 0) {
        var d = Math.round(number % 10);
        number = Math.floor(number/10);
        sumOfFacts += fac(d);
    }
    if (sumOfFacts == i) {
        result += i;
    }
}
console.log(result);