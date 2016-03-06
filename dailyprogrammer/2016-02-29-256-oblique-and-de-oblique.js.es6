'use strict';

class Solution {
	
	matrix(x) {
		let res = [];
		for(let i = 0; i < x; i++) {
			res.push([]);
		}
		return res;

	}

	oblique(input) {
		let array = input.split('\n');
		array.forEach((element, index, array) => {
			array[index] = array[index].split(' ');
		});
		let rowSize = array.length;
		let columnSize = array[0].length;
		let res = this.matrix(rowSize + columnSize - 1);

		for(let j = 0; j < rowSize; j++) {
			for(let i = 0; i < columnSize; i++) {
				res[j+i].push(array[j][i]);
			}
		}

		return res;



	}
	
}


const numbers = `0 1 2 3 4 5
6 7 8 9 10 11
12 13 14 15 16 17
18 19 20 21 22 23
24 25 26 27 28 29
30 31 32 33 34 35`;


const solution = new Solution();

console.log(solution.oblique(numbers))