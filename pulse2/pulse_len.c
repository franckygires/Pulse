#include <stdio.h>

#include <stdlib.h>

#include <unistd.h>


// void my_putchar(int c)
// {
//     write(1, &c, 1);
// }

int my_strlen(char* str)
{
	int len;

	len = 0;
	while(str[len] != '\0')
	{
		len = len + 1;

        
	}
    return(len);
}


int main(int argc, char *argv[])
{
    char* str = "pulse test technique";

    my_strlen(str);

}




















