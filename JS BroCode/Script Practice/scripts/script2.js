/*
    BOOLEANS

    They're either TRUE or FALSE and are tipically used as flags

    They're mostly used within IF statements to check something and not directly. Like, "if somebody is online, do this, if not do something else".

*/

// let online = true; //or false
// let for_sale = true;
// let is_student = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${for_sale}`);
// console.log(`Enrolled: ${is_student}`);

let full_name = "Bro Code";
let age = 24;
let is_student = false;

document.getElementById("p1").textContent = `Your name is ${full_name}`;
document.getElementById("p2").textContent = `You're ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${is_student}`;