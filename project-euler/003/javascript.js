function prime(num) {

	for(var i = 2; i < num; i++) {
		if(num % i == 0) {
			num /= i;
		}
	}

	return i;
}

console.log(prime(600851475143));