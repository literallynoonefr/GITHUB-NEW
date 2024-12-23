/*
     = assignment operator
    == comparison operator (compare if values are equal)
   === strict equality operator (compare if values & datatype are equal)
    != inequality operator
   !== strict inequality operator 

    = you usually see it when you assign a value to a variable




*/


/*
    //Testing the == operator

    const PI = 3.14;
    //"" (double quote) represents a string...
    if(PI == "3.14"){
        console.log("That is PI");
    }
    else{
        console.log("That is not PI");
    }
*/

/*
    //Testing the === operator

    const PI = 3.14;

    if(PI === 3.14){
        console.log("That is PI");
    }
    else{
        console.log("That is not PI");
    }
*/

const PI = 3.14;

if(PI !== "3.14"){
    console.log("That is NOT PI");
}
else{
    console.log("That is PI");
}