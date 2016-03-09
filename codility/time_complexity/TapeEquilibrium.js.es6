'use strict';

function solution(A) {

	let length = A.length;
	let head = A[0];
	let min_diff, curr_diff, tail;

	if(length === 2) return Math.abs(A[0] - A[1]);

	tail = A.reduce((a, b) => a + b) - A[0];

	min_diff = Math.abs(head - tail);

	for(let i = 1; i < length - 2; i++) {
		head += A[i];
		tail -= A[i];
		if(Math.abs(head - tail) < min_diff) {
			min_diff = Math.abs(head - tail);
		}
	}
	return min_diff;

}

const array = [3, 1, 2, 4, 3];
console.log(solution(array));