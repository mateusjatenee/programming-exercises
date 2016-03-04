'use strict';

function solution(a) {
	var length = a.length;

	a.sort((a, b) => a - b);

	return Math.max(a[0] * a[1] * a[length - 1], a[length - 3] * a[length - 2] * a[length - 1]);
}

var array = [-3, 1, 2, -2, 5, 6];

console.log(solution(array));