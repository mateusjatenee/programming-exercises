def solution(X, Y, D):
	# currently = X
	# desired = Y
	# jump distance = D
	distance = Y - X
	if distance % D == 0:
		return distance / D

	return distance / D + 1

print(solution(10, 85, 30))