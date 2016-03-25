def solve
	n = 999 * 999

	while n > 100000
		string = n.to_s
		reverseStr = string.reverse!

		if string == reverseStr
			sqrt = Math.sqrt(n)

			divisor = sqrt

			while n % divisor != 0 && divisor >= 100 && n / divisor <= 999
				divisor -= 1
			end

			if n % divisor == 0 && divisor >= 100 && n / divisor <= 999

				return n
				
			end

		end
		
	end
end

puts solve()