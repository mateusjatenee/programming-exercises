require './1.rb'
require 'minitest/autorun'

class BinarySearchTest < MiniTest::Unit::TestCase

	def test_search_for_five_in_an_ordered_array_returns_3
		array = [0, 1, 3, 4, 5, 9, 16, 24]
		assert_equal 4, search(array, 5)
	end

end