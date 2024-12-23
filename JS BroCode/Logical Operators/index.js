/*
    LOGICAL OPERATORS

    Used to combine or manipulate boolean values (true or false)

    AND = && -> checks if TWO CONDITIONS are TRUE
    OR = || -> at least ONE CONDITION needs to be TRUE
    NOT = !
*/

/* 
    && operator
    const temp = 20;
    if(temp > 0 && temp <= 30){
        console.log("The weather is GOOD");
    }
    else{
        console.log("The weather is BAD");
    }

*/


/* 
    || operator
    const temp = 200;
    if(temp <= 0 || temp > 30){
        console.log("The weather is BAD");
    }
    else{
        console.log("The weather is GOOD");
    }

*/


// the !not operator can flip the value of a boolean
const is_sunny = true;

if(!is_sunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}