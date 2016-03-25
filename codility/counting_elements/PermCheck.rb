def solution(a)
	a.sort!

	length = a.length

	(1..length).each do |i|
		if a[i] !== a[1 - 1] + 1 && a[i] !== a[i - 1]
			return 0
		end
	end

	return 1
end


array = [4, 1, 1, 2, 3, 3, 9, 8, 6, 5]

puts solution(array)