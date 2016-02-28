function isPrime(number) {
	if(number % 2 == 0) {
		return (number == 2);
	} else {
		var sqrt = Math.sqrt(number);

		for(var i = 3; i <= sqrt; i += 2) {
			if (number % i == 0) {
				return false;
			}
		}

		return true;
	}
}

function solveIt(limit) {
	var sum = 0;
	for(var i = 2; i < limit; i++) {
		if(isPrime(i)) {
			sum += i;
		}
	}

	return sum;
}

console.log(solveIt(2e6));