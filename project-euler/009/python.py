import math

def solveIt(number):
	a = 1
	b = 2

	while a < number:
		while b < number and b > a:
			c = number - a - b
			if c < b:
				break
			if math.pow(a, 2) + math.pow(b, 2) == math.pow(c, 2):
				return a * b * c

			b += 1

		a += 1
		b = a + 1

print(solveIt(1000))
