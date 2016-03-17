// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(number) {
	if(number % 2 == 0) {
		return (number == 2);
	}
	
	var sqrt = Math.sqrt(number);

	for(var i = 3; i <= sqrt; i += 2) {
		if (number % i == 0) {
			return false;
		}
	}

	return true;
	
}

function solveIt(limit) {
	var primes = [2];
	var i = 3;

	while(primes.length < limit) {
		if(isPrime(i)) {
			primes.push(i);
			i++;
			continue;
		}

		i++;


	}

	return primes;
}	

var result = solveIt(10001);

console.log(result[result.length - 1]);