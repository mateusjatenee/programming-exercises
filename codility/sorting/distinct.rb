def solution(a)
	if a.length == 0
		return 0
	end

	sorted = a.sort
	last = 0
	sum = 0

	(1..a.length).each do |i|
		if sorted[i] == sorted[i-1]
			next
		else
			sum+= 1
		end

	end

	return sum
end

arr = [2, 1, 3, 2, 3, 1]
puts solution(arr)