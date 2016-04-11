<?php

function binarySearch($array, $n)
{
    $min = 0;
    $max = count($array) - 1;

    while ($min <= $max) {
        $avg = (int) ($max + $min) / 2;

        if ($array[$avg] === $n) {
            return $avg;
        } elseif ($array[$avg] < $n) {
            $min = $avg + 1;
        } else {
            $max = $avg - 1;
        }
    }

    return -1;
}

$primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var_dump(binarySearch($primes, 97));
