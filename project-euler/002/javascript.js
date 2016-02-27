var fib = [0, 1];

function next(array) {
	var length = array.length;
	var next = array[length-1] + array[length -2 ];
	array.push(next);
	return next;
}

var sum = 0;

for(var i = fib[fib.length -1]; i < 4e6; i = next(fib)) {
	if (i % 2 == 0) {
		sum += i;
	}
}

console.log(sum);

