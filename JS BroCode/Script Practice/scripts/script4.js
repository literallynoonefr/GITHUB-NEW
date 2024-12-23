/*
    HOW TO ACCEPT USER INPUT

    1. Easy way = window prompt
    2. Professional way = HTML Textbox
*/

// WINDOW PROMPT
// let username = window.prompt("What's your username?");
// console.log(username);

// PROFESSIONAL WAY

let username;

document.getElementById("my_submit").onclick = function (){
    username = document.getElementById("my_text").value;
    document.getElementById("my_h1").textContent = `Hello ${username}`

}

