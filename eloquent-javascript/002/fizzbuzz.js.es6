'use strict';

function fizzbuzz(count) {
	for(let i = 1; i < count; i++) {
		if(i % 15 === 0) {
			console.log('Fizz Buzz');
		}
		else if(i % 3 === 0) {
			console.log('Fizz');
		}
		else if(i % 5 === 0) {
			console.log('buzz');
		}
		else {
			console.log(i);
		}
	}
	

}

fizzbuzz(100);