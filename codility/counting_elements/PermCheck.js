'use strict';

function solution(a) {
	a.sort((a, b) => a - b);

	var length = a.length;

	for(let i = 1; i < length; i++) {

		if(a[i] != a[i - 1] + 1 && a[i] !== a[i - 1]) {
			return 0;
		}
	}

	return 1;
}




let array = [4, 1, 1, 2, 3, 3, 9, 8, 6, 5];

console.log(solution(array));