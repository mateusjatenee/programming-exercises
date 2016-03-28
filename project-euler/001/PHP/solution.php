<?php

function sumAllMultiples($limit)
{
    $sum = 0;
    foreach (range(0, $limit - 1) as $i) {
        if ($i % 3 == 0 || $i % 5 == 0) {
            $sum += $i;
        }
    }

    return $sum;
}
