/*
    WHILE LOOP

    Will repeat some code WHILE some condition is TRUE
*/


/*
    First variation of a WHILE LOOP

    let username = ""

    while(username === "" || username === null){
        username = window.prompt(`Enter your username: `);
    }
    console.log(`Hello ${username}`);
*/


/*
    Second variation of a WHILE LOOP

    // Do the code first, then check the condition at the end
    
    let username;

    do{
        username = window.prompt(`Enter your username:`);
    }while(username === "" || username === null)

    console.log(`Hello, ${username}`);
*/


/*
    let loggedin = false;
    let username;
    let password;

    while(!loggedin){
        username = window.prompt(`Enter your username:`);
        password = window.prompt(`Enter your password:`);

        if(username === "my_username" && password === "my_password"){
            loggedin = true;
            console.log("You are logged in!");
        }
        else{
            console.log("Invalid credentials, please try again.");
        }
    }
*/

// loggedin can be true in this variation
let loggedin = true;
let username;
let password;

do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username === "my_username" && password === "my_password"){
        loggedin = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials, please try again.");
    }
}while(!loggedin)