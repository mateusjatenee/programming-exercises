import math

def isPrime(number):
	if number % 2 == 0:
		return number == 2
	else:
		sqrt = int(math.sqrt(number))

		for i in xrange(3, sqrt, 2):
			if number % i == 0:
				return False

		return True

def solveIt(limit):
	sum = 0
	for i in xrange(2, limit):
		if isPrime(i):
			sum += i

	return sum


print(solveIt(2000000))