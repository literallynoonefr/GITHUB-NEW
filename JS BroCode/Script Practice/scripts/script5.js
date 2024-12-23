/* 
    TYPE CONVERSION

    Change the datatype of a value to another

    (strings, number, booleans)
*/

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

let x = "0";
let y = "pizza";
let z = "pizza"; 
/* 
    When converting to a boolean, if the user input is empty (""), the boolean will return FALSE, and you can use that FALSE return to create an IF statement to warn the user and make him fill in the data properly.

*/


x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
