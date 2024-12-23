/*
    FUNCTION

    A section of reusable code.

    Declare a code once, use it whenever you want.
    Call the function to execute that code.

    What goes inside the () are called arguments: they're data you send the function. And you need a matching set of parameters and arguments.
*/

/*
function happy_birthday(username, age)//parameters{
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old.`);
}
happy_birthday("Don Draper", 25)//arguments;
happy_birthday("Peter Campbell", 30);
*/


/*
function add(x, y){
    let result = x + y;
    return result;
    //only return x + y; is valid too
}

let answer = add(2, 3); //you can add add(2, 3) inside .log()
console.log(answer);
*/

/*
function subtract(x, y){
    return x - y
}
console.log(subtract(2, 3));


function multiply(x, y){
    return x * y
}
console.log(multiply(2, 3));


function divide(x, y){
    return x / y
}
console.log(divide(2, 3));
*/

/*
function is_even(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_even(3));
*/

/*
    //ternary operator version
function is_even(number){

    return number % 2 === 0 ? true : false;
}
console.log(is_even(16));
*/

/*
function email_validation(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(email_validation("dondraper@fake.com"));
*/

// ternary operator version
function email_validation(email){

    return email.includes("@") ? true : false;
}
console.log(email_validation("dondraper@fake.com"));