<?php

function solution($a)
{
    if (count($a) == 0) {
        return 0;
    }

    $length = count($a);

    sort($a);

    $sum = 1;

    for ($i = 1; $i < $length; $i++) {
        if ($a[$i] == $a[$i - 1]) {
            continue;
        } else {
            $sum += 1;
        }
    }

    return $sum;
}

$array = [2, 1, 3, 2, 3, 1];
var_dump(solution($array));
