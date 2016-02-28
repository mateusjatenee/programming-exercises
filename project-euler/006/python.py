import math

def sumOfTheSquares(limit):
	sum = 0
	for i in xrange(1, limit):
		sum += math.pow(i, 2)

	return sum

def squareOfTheSum(limit):
	sum = 0
	for i in xrange(1, limit):
		sum += i

	return math.pow(sum, 2)



result = squareOfTheSum(100) - sumOfTheSquares(100)
print(result) 