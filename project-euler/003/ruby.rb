def prime(num)
	(2..num-1) .each do |i|
		if num % i == 0
			num /= i
		end
	end

	return i
end

puts prime(600851475143)