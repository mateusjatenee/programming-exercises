<?php

function prime($num)
{
    for ($i = 2; $i < $num; $i++) {
        if ($num % $i == 0) {
            $num /= $i;
        }
    }

    return $i;
}

var_dump(prime(600851475143));
