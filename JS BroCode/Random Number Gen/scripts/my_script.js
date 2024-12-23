/* 

                RANDOM NUMBER GENERATOR


    "Math.random()" is the function for that.

    Said function will generate a random number between 0 and 1, if not specified.

    Adding the multiplier "*" will make it randomize between 0 and 6, for example.

    If you add a "+ 1", this means you're adding a minimum, so instead of it being 0 by default, now it will be 1.

    The "Math.floor()" function serves to round the numbers downwards, by removing the decimal part of it.
    
*/


// This function is randomizing numbers between 1 and 100.
    //let random_num = Math.floor(Math.random() * 100) + 1;
    //console.log(random_num);


/* 

    You can be even more specific by creating variables and replacing the numbers inside the function with said variables. See below for more.

    For said function work, you need to subtract the min from the max, otherwise you will have your randomizer choose numbers between 50 and 150 (min = 50; max = 100, thus 150). After subctracting, you need to force operator precedence by adding a set of parenthesis "(max - min)".

*/

//const min = 50;
//const max = 100;

//let random_num = Math.floor(Math.random() * (max - min)) + min;
//console.log(random_num);




const my_button = document.getElementById("my_button");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let random_num1;
let random_num2;
let random_num3;

my_button.onclick = function(){
    random_num1 = Math.floor(Math.random() * max) + min;
    random_num2 = Math.floor(Math.random() * max) + min;
    random_num3 = Math.floor(Math.random() * max) + min;
    label1.textContent = random_num1;
    label2.textContent = random_num2;
    label3.textContent = random_num3;
}