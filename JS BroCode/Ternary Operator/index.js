/*
    TERNARY OPERATOR

    A shortcut to if(){} and else{} statements.

    Helps to assign a variable based on a condition.

    condition ? codeIfTrue : codeIfFalse;
*/

// Example 1
// let age = 21;
// let message = age >= 18 ? "You're an adult!" : "You're a MINOR!";
// console.log(message);

/*
    The code above is an alternative to writing something like this:

    let age = 21;
    let message;

    if(age >= 18){
        message = `You're an ADULT!`;
        console.log(message);
    }
    else{
        message = `You're a MINOR!`;
        console.log(message);
}
*/

// Example 2
// let time = 9;
// let greeting = time  < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);


// Example 3
// let is_student = false;
// When using a boolean variable, you can just write the boolean variable itself
// You don't need to set a condition...
// let message = is_student ? "You are a student!" : "You're NOT a student!";
// console.log(message);


// Example 4
let purchase_amount = 125;
let discount = purchase_amount >= 100 ? 10 : 0;
console.log(`Your total is $${purchase_amount - purchase_amount * (discount/100)}`)