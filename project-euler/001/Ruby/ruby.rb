def sumAllMultiples(limit)
	sum = 0
	(1..limit - 1).each do |number|
		if (number % 3 == 0) || (number % 5 == 0)
			sum += number
		end
	end

	return sum
end

puts sumAllMultiples(1000)