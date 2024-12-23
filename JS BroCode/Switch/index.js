/*
    SWITCH

    Can be an efficient replacement to many else if statements
*/

/* 
    Example 1

let day = 1;

switch(day){
    // break statements are used to break out of the switch once we have a matching case
    // without a break, once you have a matching case, it'll execute the code found within that space then cascade down and execute any code that follows after, including code within different cases.
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    case 7:
        console.log("It's Sunday!");
        break;
    // in case there are no matches, you can execute a default case
    default:
        console.log(`${day} is not a day.`)
}
*/


// Example 2
let test_score = 80;
let letter_grade;

switch(true){
    case test_score >= 90:
        letter_grade = "A";
        break;
    case test_score >= 80:
        letter_grade = "B";
        break;
    case test_score >= 70:
        letter_grade = "C";
        break;
    case test_score >= 60:
        letter_grade = "D";
        break;
    default:
        letter_grade = "F";     
}

console.log(letter_grade)