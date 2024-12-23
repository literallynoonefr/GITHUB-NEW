/*
    METHOD CHAINING

    Calling one method after another in one continuous line of code.
*/

let username = window.prompt("Enter your username: ");

// ------ NO METHOD CHAINING ------


/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extra_chars = username.slice(1);
extra_chars = extra_chars.toLowerCase();
username = letter + extra_chars;

console.log(username);
*/

// ------ METHOD CHAINING ------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);