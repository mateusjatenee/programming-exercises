def solution(x, a):
	length = len(a)
	if length == a:
		if a[0] == 1 and x == 1:
			return 0

	counter = 1

	for i in xrange(0, length):
		if a[i] <= counter:
			if a[i] == x:
				return i

			counter += 1

	return -1


arr = [1, 3, 1, 4, 2, 3, 3, 4, 9, 4, 12, 41, 5]

print(solution(5, arr))