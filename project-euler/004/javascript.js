(function() {
	var n = 999 * 999;
	var str;
	var reverseStr;
	var sqrt;
	var divisor;

	while (n > 100000) {
		str = n.toString();
		reverseStr = str.split('').reverse().join('');

		if(str == reverseStr) {
			sqrt = Math.sqrt(n);

			divisor = Math.floor(sqrt);

			while(n % divisor !== 0 && divisor >= 100 && n / divisor <= 999) {
				divisor--;
			}

			if(n % divisor === 0 && divisor >= 100 && n / divisor <= 999) {
				console.log(n);
				return n;
			}
		}
	n--;
	}

}());