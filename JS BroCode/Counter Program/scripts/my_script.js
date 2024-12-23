/*
    COUNTER PROGRAM
*/

const decrease_btn = document.getElementById("decrease_btn");
const reset_btn = document.getElementById("reset_btn");
const increase_btn = document.getElementById("increase_btn");
const count_label = document.getElementById("count_label"); //text content
let count = 0;

increase_btn.onclick = function(){
    count++;
    count_label.textContent = count;
}

decrease_btn.onclick = function(){
    count--;
    count_label.textContent = count;
}

reset_btn.onclick = function(){
    count = 0;
    count_label.textContent = count;
}
