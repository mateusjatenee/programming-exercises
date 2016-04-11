<?php

require 'solution.php';

class TestSolution extends PHPUnit_Framework_TestCase
{
    public function testSolutionIsCorrect()
    {
        $limit = 2e6;
        $expected = 142913828922;
        $this->assertEquals(solution($limit), $expected);
    }
}
