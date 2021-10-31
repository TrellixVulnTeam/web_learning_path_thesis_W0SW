let value = `/* C demo code */

#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}


`;

let editor = CodeMirror(document.getElementById("editor"), {
	lineNumbers: true,
	mode: "text/x-csrc",
	value: value,
	theme: "eclipse"
});
