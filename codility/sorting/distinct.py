def solution(a):
	if(len(a) == 0):
		return 0

	a.sort()
	sum = 1

	for i in xrange(1, len(a)):
		if a[i] == a[i - 1]:
			continue
		else:
			sum += 1

	return sum



array = [2, 1, 3, 2, 3, 1]
print(solution(array))