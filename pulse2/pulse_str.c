#include <stdio.h>

#include <stdlib.h>

#include <unistd.h>


void my_putchar(char c)
{
    write(1, &c, 1);
}

void pulse( char* str) 
{
    int i;
    for (i = 0; str[i] != '\0'; i++)
    {
        my_putchar(str[i]);
    
    }
    my_putchar ('\n');
    
}

int main(int argc, char *argv[])
{
    char* str = "pulse test technique";

    pulse(str);
}




















