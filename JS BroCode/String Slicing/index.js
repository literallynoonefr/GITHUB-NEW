/*
    STRING SLICING

    Creating a substring from a portion of another string

    string.slice(start, end)
*/

////const fullname = "Don Draper";

// the ending index is EXCLUSIVE
// "Don" normally is 0, 1 and 2
// but since it's exclusive, it's going to stop at 2 and not display it
// so you have to add 3

////let firstname = fullname.slice(0, 3);

// if you're going to create a substring from some position all the way to the end
// you don't necessarily need an ending index
// try removing the "10"...

////let lastname = fullname.slice(4, 10);

//console.log(firstname, lastname);


// slicing only the first character
//let first_char = fullname.slice(0, 1);
//console.log(first_char);

// slicing only the last character
// you can use -1
//let last_char = fullname.slice(9, 10);
//let last_char = fullname.slice(-1);
//console.log(last_char);

/*
const fullname = "Donald Draper";

let firstname = fullname.slice(0, fullname.indexOf(" "));
// the + 1 excludes the space, and includes anything after it
let lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);
*/

const email = "dondraper@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);
