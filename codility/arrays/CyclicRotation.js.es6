'use strict';

function rotate(a, k) {

	let length = a.length;
	if(length !== 0) {
		let i = 0;
		let p;
		while (i < k) {
			p = a.pop();
			a.unshift(p);
			i++;
		}
	}

	return a;

}

const arr = [3, 8, 9, 7, 6];

console.log(rotate(arr, 1));