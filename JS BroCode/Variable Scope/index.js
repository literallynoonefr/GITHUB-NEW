/*
    Variable Scope

    Where a variable is recognized and accessible (local vs global)

    Any variable declared inside of a function has a LOCAL scope (or anytime you declare a variable within a set of curly braces{}). This way, there's no naming conflicts because they're within differente scopes, that way you can declare variables with the same name

    Functions can't see inside of other functions.

    A global scope for a variable, is any variable declared outside of a function. It's available through the whole program. A global variable is recognized and accessible from everywhere.

    Large programs benefits more from local variables!

    If you have 2 variables with the same name, the one from the local scope will be considered first.
*/

//let x = 3 //global variable

function function1(){
    let x = 1; //local variable (inside a function)
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

function2();
