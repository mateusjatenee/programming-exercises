def solve(limit):
	n = 0
	i = 1
	max = limit
	solved = False

	while solved == False:
		n += max

		while n % i == 0 and i <= max:
			if i == max:
				solved = True

		i = 1

	return n

print(solve(20))