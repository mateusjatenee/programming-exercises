require './ruby.rb'
require 'minitest/autorun'

class SumAllMultiplesTest < MiniTest::Unit::TestCase

	def test_sumAllMultiples_returns_233168_for_the_sum_of_all_numbers_below_100
		limit = 1000
		assert_equal 233168, sumAllMultiples(limit)
	end
end