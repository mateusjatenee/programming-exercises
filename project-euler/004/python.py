import math

def solve():
	n = 999 * 999

	while n > 100000:
		string = str(n)
		reverseStr = string[::-1]

		if string == reverseStr:
			sqrt = math.sqrt(n)

			divisor = math.floor(sqrt)

			while n % divisor != 0 and divisor >= 100 and n / divisor <= 999:
				divisor -= 1

			if n % divisor == 0 and divisor >= 100 and n / divisor <= 999:
				return n

		n -= 1


print(solve())