#include <stdio.h>
#include <stdlib.h>
#include <time.h> 

int main()
{

	int tamanho, i;
	srandom(time(NULL));
	char caracRand;
	
	printf("Digite o tamanho da senha: ");
	scanf("%d", &tamanho);

	for(i=0; i < tamanho; i++)
	{
		caracRand = "QWERTYUIOPÇLKJHGFDSAZXCVBNMpoiuytrewqasdfghjklçmnbvcxz0123456789!@#$%&*()_-+="[random () % 77];
		printf("%c", caracRand);
	}

	printf("\n");
	return 0;
}