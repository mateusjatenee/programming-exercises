<?php

include_once 'solution.php';

class test extends PHPUnit_Framework_TestCase
{
    public function testPrimeReturnsJustFine()
    {
        $prime = prime(600851475143);
        $this->assertEquals($prime, 6857);
    }
}
