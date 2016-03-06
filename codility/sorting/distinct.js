function solution(a) {
	if(a.length == 0) return 0;

	sorted = a.sort(function(a, b) {
		return a - b;
	});
	var last = 0;
	var sum = 1;

	for(var i = 1; i < sorted.length; i++) {
		if(sorted[i] == sorted[i-1]) {
			continue;
		} else {
			sum ++;
		}
	}

	return sum;
}


var array = [2, 1, 3, 2, 3, 1];
console.log(solution(array));
