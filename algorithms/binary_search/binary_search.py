def binarySearch(list, n):
	min = 0
	max = len(list) - 1

	while min <= max:
		avg = (max + min) // 2

		if list[avg] == n:
			return avg
		else:
			if list[avg] < n:
				min = avg + 1
			else:
				max = avg - 1

	return -1


primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

print(binarySearch(primes, 97))