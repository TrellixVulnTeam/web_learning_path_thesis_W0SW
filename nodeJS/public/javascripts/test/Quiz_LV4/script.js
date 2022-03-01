let value = `/* C demo code */

#include <stdio.h>

int main()
{
    int id = 1610900;
    printf("Bangkok Unvercity %d", id);
    return 0;
}


`;

let editor = CodeMirror(document.getElementById("editor"), {
	lineNumbers: true,
	mode: "text/x-csrc",
	value: value,
	theme: "eclipse"
});
