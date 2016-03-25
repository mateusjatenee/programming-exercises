#include <stdio.h>

int main(void)
{
	long num = 600851475143;
	int i;

	for(i = 2; i < num; i++) {
		if(num % i == 0) {
			num /= i;
		}
	}

	printf("%ld\n", num) ;
}