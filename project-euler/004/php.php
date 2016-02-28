<?php

function solveIt()
{
    $n = 999 * 999;

    while ($n > 100000) {
        $str = (string) $n;
        $reverseStr = strrev($str);

        if ($str == $reverseStr) {
            $sqrt = sqrt($n);

            $divisor = floor($sqrt);

            while ($n % $divisor !== 0 && $divisor >= 100 && $n / $divisor <= 999) {
                $divisor--;
            }

            if ($n % $divisor == 0 && $divisor >= 100 && $n / $divisor <= 999) {
                return $n;
            }
        }

        $n--;

    }
}

var_dump(solveit());
