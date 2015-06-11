function dec2Bin(dec){
    return (dec >>> 0).toString(2);
}

function isPalindrome(str){
	return str.split('').reverse().join('') == str;
}
var total = 0;
for (var i = 0; i < 1000000; i++){
	if (isPalindrome(i.toString())){
		if (isPalindrome(dec2Bin(i))){
			total += i;
		}
	}
}

console.log(total);