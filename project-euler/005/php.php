<?php

function solve($limit)
{
    $n = 0;
    $i = 1;
    $max = $limit;
    $solved = false;

    while ($solved == false) {
        $n += $max;

        while ($n % $i == 0 && $i <= $max) {
            if ($i == $max) {
                $solved = true;
            }
            $i++;
        }
        $i = 1;
    }

    return $n;
}

var_dump(solve(20));
