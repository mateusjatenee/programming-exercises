def sumAllMultiples(limit):
	sum = 0
	for i in xrange(0, limit):
		if i % 3 == 0 or i % 5 == 0:
			sum += i
	return sum

print(sumAllMultiples(1000))