def solution(x, a)

	length = a.length
	if length == 1
		if a[0] == 1 && x == 1
			return 0
		end
	end

	counter = 1

	(0..length).each do |i|
		if a[i] <= counter
			if a[i] == x
				return i
			end

			counter += 1
		end
	end

	return -1

end


arr = [1, 3, 1, 4, 2, 3, 3, 4, 9, 4, 12, 41, 5]

puts solution(5, arr)