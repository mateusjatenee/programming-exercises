<?php

function solveIt($number)
{
    $a = 1;
    $b = 2;

    while ($a < $number) {
        while ($b < $number && $b > $a) {
            $c = $number - $a - $b;
            if ($c < $b) {
                break;
            }
            if (($a ** 2) + ($b ** 2) == ($c ** 2)) {
                return $a * $b * $c;
            }
            $b++;
        }
        $a++;
        $b = $a + 1;
    }
}

var_dump(solveIt(1000));
