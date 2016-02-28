import math
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10 001st prime number?

def isPrime(number):
	if number % 2 == 0:
		return (number == 2)
	else:
		sqrt = int(math.sqrt(number)) + 1

		for i in xrange(3, sqrt):
			if number % i == 0:
				return False

		return True


def solveIt(limit):
	primes = [2]
	i = 3

	while len(primes) < limit:
		if isPrime(i):
			primes.append(i)
			i += 1
			continue

		i += 1

	return primes


result = solveIt(10001)

print(result[10000])