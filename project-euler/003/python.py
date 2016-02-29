def prime(num):

	for i in xrange(2, num):
		if num % i == 0:
			num = num / i

	return i

print(prime(600851475143))