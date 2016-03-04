'use strict';

function solution(a) {
	var length = a.length;

	a.sort((a, b) => b - a);

	for(var i = 0; i < length - 2; i++) {
		var p = i;
		var q = i + 1;
		var r = i + 2;

		var conds = [
		a[p] + a[q] > a[r],
		a[q] + a[r] > a[p],
		a[r] + a[p] > a[q],
		];

		if(conds[0] && conds[1] && conds[2]) {
			return 1;
		}
	}
	return 0;
}

var array = [10, 50, 5, 1];

console.log(solution(array));