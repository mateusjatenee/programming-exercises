package main

import "fmt"

func sumAllMultiples(limit int) int {
	sum := 0
	for i := 0; i < limit; i++ {
		if i % 3 == 0 || i % 5 == 0 {
			sum += i
		}
	}
	return sum
}

func main() {
	sum := sumAllMultiples(1000)
	fmt.Printf("%d\n", sum)
}