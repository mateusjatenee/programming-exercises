function solve(limit) {
	var n = 0;
	var i = 1;
	var max = limit;
	var solved = false;

	while(solved == false) {
		n += max;

		while (n % i == 0 && i <= max) {
			if (i == max) {
				solved = true;
			}
			i++;
		}
		i = 1;
	}

	return n;

}

console.log(solve(20));