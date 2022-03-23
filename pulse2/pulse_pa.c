#include <stdio.h>

#include <stdlib.h>

#include <unistd.h>


// int main(int argc, char *argv[]) {
//     char i;
//     printf("les lettres de l'alphabet sont:  \n");
//     for (i= 'a'; i <= 'z'; i++) {
//         printf("%c", i);
//     }

//     return 0;
// }

void my_putchar(char c)
{
    write(1, &c, 1);
}


int main(int argc, char *argv[])
{
    char i;
    for (i = 'a'; i <= 'z'; i++)
    {
        my_putchar(i);
    
    }
    my_putchar ('\n');
}




















