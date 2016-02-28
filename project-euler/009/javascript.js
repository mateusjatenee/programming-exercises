function solveIt(number) {
	var a = 1;
	var b = 2;
	var c;

	while(a < number) {
		while(b < number && b > a) {
			c = number - a - b;
			if(c < b) {
				break;
			}
			if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
				return a * b * c;
			}
			b++;
		}
		a++;
		b = a + 1;
	}
}

console.log(solveIt(1000));