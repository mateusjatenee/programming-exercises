<?php

function solution($X, $Y, $D): int
{
    $distance = $Y - $X;
    if ($distance % $D == 0) {
        return $distance / $D;
    }

    return $distance / $D + 1;
}

var_dump(solution(10, 85, 30));
