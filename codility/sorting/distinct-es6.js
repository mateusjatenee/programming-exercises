'use strict';

function solution(array) {
	if(array.length == 0) return 0;

	array.sort((a, b) => a - b);
	
	let sum = 0;

	array.map((now, index, arr) => now != arr[index - 1] ? sum++ : now );

	return sum;
}


const array = [2, 1, 3, 2, 3, 1, 4, 9, 8, 5, 6, 7, 10, 51];
console.log(solution(array));
