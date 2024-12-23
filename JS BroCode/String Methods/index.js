/*
    STRING METHODS

    Allow you to manipulate and work with text (strings)
*/

let username = "Don Draper";


// by adding a dot (".") you can access any properties or methods that the string has

// chartAt will display the selected character inside the parenthesis
//0 highlights the first character in said string...
//console.log(username.charAt(0))

// indexOf() will display the first occurrance of the selected character
//console.log(username.indexOf("o"))

//lastIndexOf() will display the LAST occurrance of the selected character
//console.log(username.lastIndexOf("o"))

// length of the selected text - not a method
//console.log(username.length);

//.trim() will eliminate white spaces
//username = username.trim();
//console.log(username)

// .toUpperCase() will convert the whole string to upper case
// .toLowerCase() will turn all the characters to lower case
//username = username.toUpperCase(username);
//console.log(username);

// .repeat() will repeat the string according to the value set inside the parenthesis 
//username = username.repeat(5);
//console.log(username);

// to determine if a string starts/ends with a given character, you can use the
// .startsWith() method or the .endsWith() method
// said method will return a boolean (true or false)
// it's case sensitive
// let result = username.endsWith(" ");
// if(result){
//     console.log("Your username can't end with an empty space ' '.");
// }
// else{
//     console.log(username);
// }


// the .includes() method verifies if something is included and its better used within an if statement, much like the others above.
// let result = username.includes(" ");

// if(result){
//     console.log("Your username can't include an empty space ' '.");
// }
// else{
//     console.log(username);
// }


// .replaceAll() is a method to replace characters within a string
// inside the parenthesis first you choose what you want to replace
// and after the comma (",") you choose the replacement
// let phone_number = "123-456-7890";

// phone_number = phone_number.replaceAll("-", "/");
// console.log(phone_number);


// .padStart()
// example: pad this string with (15, "0") zeros until it's 15 characters long
// same idea goes for .padEnd()
let phone_number = "123-456-7890";
phone_number = phone_number.padEnd(15, "0");
console.log(phone_number);


