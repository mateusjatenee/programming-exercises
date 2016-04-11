<?php

class Solution
{
    public function __construct($limit)
    {
        $this->limit = $limit;
    }

    public function sumOfTheSquares()
    {
        $sum = 0;
        for ($i = 0; $i < $this->limit; $i++) {
            $sum += $i ** 2;
        }

        return $sum;
    }

    public function squareOfTheSum()
    {
        $sum = 0;
        for ($i = 0; $i < $this->limit; $i++) {
            $sum += $i;
        }

        return $sum ** 2;
    }
}

$solution = new Solution(100);
$result = $solution->squareOfTheSum() - $solution->sumOfTheSquares();

var_dump($result);
