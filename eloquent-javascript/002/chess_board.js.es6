'use strict';

function chess_board(size) {
	let board = '';

	for(let x = 0; x < size; x++) {
		for(let y = 0; y < size; y++) {
			if((x + y) % 2 === 0) {
				board += ' '; 
			} else {
				board += '#';
			}
		}
		board += '\n';
	}

	return board;
}

console.log(chess_board(8));
