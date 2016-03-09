'use strict';

function binarySearch(array, n) {
	let min = 0;
	let max = array.length - 1;
	let avg;

	while(min <= max) {
		avg = parseInt((max + min) / 2);

		if(array[avg] === n) {
			return avg;
		}
		else if(array[avg] < n) {
			min = avg + 1;
		} else {
			max = avg - 1;
		}
	}

	return -1;
}

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(binarySearch(primes, 97));