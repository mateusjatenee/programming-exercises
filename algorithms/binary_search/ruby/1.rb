# recursive solution

def search(array, value, from = 0, to = nil)
	if to == nil
		to = array.count - 1
	end

	mid = (from + to) / 2

	if value < array[mid]
		return search(array, value, from, mid - 1)
	elsif value > array[mid]
		return search(array, value, mid + 1, to)
	else
		return mid
	end

end
