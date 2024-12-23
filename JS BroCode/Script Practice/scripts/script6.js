/* 
    CONST / CONSTANT VARIABLE

    A variable that CAN'T be CHANGED once you assign it/them

    It is good practice, if you have any constants, to make all the letters in the variable name UPPER CASE

    IMPORTANT: Capitalizing a constant is usually only done with permitive datatypes, such as numbers and booleans. 
    Reference datatypes, such as strings, don't normally follow this convention.
*/

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("my_submit").onclick = function(){
    radius = document.getElementById("my_text").value; //user input
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("my_h3").textContent = circumference + "cm"; //where the value is being displayed
}