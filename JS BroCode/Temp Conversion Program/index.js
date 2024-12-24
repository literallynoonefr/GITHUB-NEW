// TEMPERATURE CONVERSION PROGRAM

const text_box = document.getElementById("text_box");
const to_fahrenheit = document.getElementById("to_fahrenheit");
const to_celsius = document.getElementById("to_celsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(to_fahrenheit.checked){
        temp = Number(text_box.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " F🌡";
    }
    else if(to_celsius.checked){
        temp = Number(text_box.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " C🌡";
    }
    else{
        result.textContent = "Select a Unit";
    }
}