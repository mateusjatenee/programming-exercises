<?php

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

class Solution
{
    public function __construct($limit)
    {
        $this->limit = $limit;
    }

    public function isPrime($number)
    {
        if ($number % 2 == 0) {
            return ($number == 2);
        } else {
            $sqrt = sqrt($number);

            for ($i = 3; $i <= $sqrt; $i += 2) {
                if ($number % $i == 0) {
                    return false;
                }
            }

            return true;
        }
    }

    public function solve()
    {
        $primes = [2];
        $i = 3;

        while (sizeof($primes) < $this->limit) {
            if ($this->isPrime($i)) {
                array_push($primes, $i);
                $i++;
                continue;
            }

            $i++;
        }

        return $primes;
    }
}

$solution = new Solution(10001);

$result = $solution->solve();

var_dump($result[sizeof($result) - 1]);
