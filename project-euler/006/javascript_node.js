// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

'use strict';

class ProjectEuler {
	constructor(limit) {
		this.limit = limit;
	}

	sumOfTheSquares() {
		var sum = 0;
		for(var i = 0; i < this.limit; i++) {
			sum += Math.pow(i, 2);
		}
		return sum;
	}

	squareOfTheSum() {
		var sum = 0;
		for(var i = 0; i < this.limit; i++) {
			sum += i;
		}
		return Math.pow(sum, 2);
	}

}


var solve = new ProjectEuler(100);
var result = solve.squareOfTheSum() - solve.sumOfTheSquares();
console.log(result);