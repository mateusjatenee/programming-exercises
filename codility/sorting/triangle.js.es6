'use strict';

function solution(a) {
	let length = a.length;

	a.sort((a, b) => b - a);

	for(let i = 0; i < length - 2; i++) {
		let p = i;
		let q = i + 1;
		let r = i + 2;

		let conds = [
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

const array = [10, 2, 5, 1, 8, 20];

console.log(solution(array));