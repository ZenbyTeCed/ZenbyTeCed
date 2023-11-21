#include <stdio.h>
#include <conio.h>

int main() {
    float Chemistry, Physics, Mathematics, Computer, Average, sum;

    printf("Enter Chemistry grade: ");
    scanf("%f", &Chemistry);
    printf("Enter Physics grade: ");
    scanf("%f", &Physics);
    printf("Enter Mathematics grade: ");
    scanf("%f", &Mathematics);
    printf("Enter Computer grade: ");
    scanf("%f", &Computer);

    if (Chemistry <= 60 || Chemistry >= 100 || Physics <= 60 || Physics >= 100 || Mathematics <= 60 || Mathematics >= 100 || Computer <= 60 || Computer >=100){
    	
    	
    	if (Chemistry <= 60 || Chemistry >= 100){
    		printf("\n*******************************\n");
    		printf("\nInvalid Chemistry grade!!!\nBecause you have entered %.2f\n\n", Chemistry);
    	}
    
    	if (Physics <= 60 || Physics >= 100){
    		printf("Invalid Physics grade!!!\nBecause you have entered %.2f\n\n", Physics);
    	}
    
    	if (Mathematics <= 60 || Mathematics >= 100){
    		printf("Invalid Mathematics grade!!!\nBecause you have entered %.2f\n\n", Mathematics);
    	}
    
    	if (Computer <= 60 || Computer >=100){
    		printf("Invalid Computer grade!!!\nBecause you have entered %.2f\n\n", Computer);
    		printf("*******************************\n");
    	}
    	
    	printf("\nPlease input grades between 60-100\n");
    	
	} else {
		
	Average = Chemistry + Physics + Mathematics + Computer;
    sum = ((Average)/400)*100;
    
    	if (sum < 75) {
            printf("\n*******************************\nSorry you FAILED!!!\nBecause your average is %.2f\n", sum);
            printf("And you need at least %.2f point/s to pass the next level\n*******************************\n", 75 - sum);
        } else {
            printf("\n*******************************\nCONGRATULATIONS!!!\nYour average is %.2f\n", sum);
            printf("You are now promoted to the next Grade level... \n*******************************\n");
        }
        
    }
    
	getch ();
    return 0;
    
}
