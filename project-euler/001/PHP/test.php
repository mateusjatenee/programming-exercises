<?php

require 'solution.php';

class SolutionTest extends PHPUnit_Framework_TestCase
{
    public function testSolutionIsCorrect()
    {
        $solution = sumAllMultiples(1000);
        $this->assertEquals($solution, 233168);
    }
}
