/***********************************************************************
Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows

*
**
***
****
*****

************************************************************************/

function starPyramid(rows: number) {
    for (let i = 0; i < rows; i++) {
    let stars = '';
        for (let j = 0; j < i + 1; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
starPyramid(5);

/***************************************************************************
    *
   * *
  * * *
 * * * *
* * * * * 
***************************************************************************/
function starPyramid1(rows: number) {
    for (let i = 0; i < rows; i++) {
    let spaces = '';
        for (let j = 0; j < rows - (i + 1); j++) {
            spaces += ' ';
        }
        // console.log();
        for (let k = 0; k < i + 1; k++) {
            spaces+= '* '
        }
        console.log(spaces)
    }
}
starPyramid1(5);
//------------------ OR ----------------------------
/* function printPyramid(rows: number) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);       // leading spaces
    let stars = "* ".repeat(i);              // stars with space
    console.log(spaces + stars.trim());      // trim to remove trailing space
  }
}
printPyramid(5); */

