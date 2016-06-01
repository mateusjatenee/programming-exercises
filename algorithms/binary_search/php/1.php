<?php

function binarySearch($array, $n, $from = 0, $to = null)
{

    if (is_null($to)) {
        $to = count($array) - 1;
    }

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
