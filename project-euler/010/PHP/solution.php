<?php

function isPrime($number): bool
{
    if ($number % 2 == 0) {
        return $number == 2;
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

function solution(int $limit): int
{
    $sum = 0;

    for ($i = 2; $i < $limit; $i++) {
        if (isPrime($i)) {
            $sum += $i;
        }
    }

    return $sum;
}
