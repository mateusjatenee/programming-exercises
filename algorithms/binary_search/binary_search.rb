def binarySearch(array, n)

	min = 0
	max = array.length

	while min <= max
		avg = Integer((max + min) / 2)

		if array[avg] === n
			return avg
		elsif array[avg] < n
			min = avg + 1
		else
			max = avg - 1
		end
	end

	return -1

end

primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

puts(binarySearch(primes, 97))