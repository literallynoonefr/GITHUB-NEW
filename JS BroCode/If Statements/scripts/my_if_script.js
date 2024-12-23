/*
    IF STATEMENTS

    If a CONDITION is TRUE, execute some code

    If NOT, do something else.
*/


/*
                    EXAMPLE 1

    let age = 25;

    if(age >= 18){
        console.log("You are old enough to enter this site.");
    }
    else{
        console.log("You must be 18+ to enter this site.");
    }
*/

/*
                    EXAMPLE 2

    let time = 14;

    if(time < 12){
        console.log("Good morning!");
    }

    else{
        console.log("Good afternoon!");
    }
*/

/*
                    EXAMPLE 3

    If statements works very well with boolean variables. A boolean variable is the condition itself.

    let is_student = false;

    if(is_student){
        console.log("You are a student!");
    }

    else{
        console.log("You're NOT a student!");
    }
*/


/*
    Here we have another boolean example, but this time we have nested if statements. Pay proper attention to the indentation.

    let age = 18;
    let has_license = false;

    if(age >= 16){
        console.log("You are old enough to drive!");

        if(has_license){
            console.log("You have your license!");
        }
        else{
            console.log("But you do not have your license yet!");
        }
    }

    else{
        console.log("You must be 16+ to have a license.");
    }
*/


/* 
    ELSE IF statements

    The order of clauses matter.

*/
const my_text = document.getElementById("my_text");
const my_submit = document.getElementById("my_submit");
const result_element = document.getElementById("result_element");
let age;

my_submit.onclick = function(){
    //When we get text from a text box, it's a STRING datatype! So you need to convert it to Number().
    age = Number(age);
    age = my_text.value;

    if(age >= 100){
        result_element.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        result_element.textContent = `You can't enter. You were just born!`;
    }
    else if(age >= 18){
        result_element.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        result_element.textContent = `Your age can't be below 0`;
    }
    else{
        result_element.textContent = `You must be 18+ to enter this site.`;
    }
}



