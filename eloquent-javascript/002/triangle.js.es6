'use strict';

function triangle(height) {
	let hashtag = '#';
	for(let i = 0; i < height; i++) {
		console.log(hashtag);
		hashtag += '#';
	}
}

triangle(7);