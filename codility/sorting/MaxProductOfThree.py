import math

def solution(a):
	length = len(a)

	a.sort()




	return max(a[0] * a[1] * a[length - 1], a[length - 3] * a[length - 2] * a[length - 1])


array = [-3, 1, 2, -2, 5, 6]

print(solution(array))
