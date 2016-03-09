'use strict';

function solution(A) {

	let length = A.length;
	let head = A[0];
	let min_diff, curr_diff, tail;

	if(length === 2) return Math.abs(A[0] - A[1]);

	tail = A.reduce((a, b) => a + b) - A[0];

	min_diff = Math.abs(head - tail);
	curr_diff = min_diff;

	for(let i = 1; i < length - 2; i++) {
		head += A[i];
		tail -= A[i];
		curr_diff = Math.abs(head - tail);
		if(curr_diff < min_diff) {
			min_diff = curr_diff;
		}
	}
	return min_diff;

}

const array = [3, 1, 2, 4, 3];
console.log(solution(array));