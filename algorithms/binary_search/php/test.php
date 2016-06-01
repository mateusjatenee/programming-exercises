<?php

require '1.php';

class BinarySearchTest extends \PHPUnit_Framework_TestCase
{
    public function test_an_array_can_be_successfuly_searched()
    {
        $primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        $this->assertEquals(24, binarySearch($primes, 97));
    }
}
