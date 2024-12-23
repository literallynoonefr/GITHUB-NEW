/*
    .checked

    Property that determines the checked state of an HTML Checkbox or Radio Button element.
*/


const my_checkbox = document.getElementById("my_checkbox");
const visa_btn = document.getElementById("visa_btn");
const mastercard_btn = document.getElementById("mastercard_btn");
const paypal_btn = document.getElementById("paypal_btn");
const my_submit = document.getElementById("my_submit");
const sub_result = document.getElementById("sub_result");
const payment_result = document.getElementById("payment_result");

my_submit.onclick = function(){

    //The .checked property evaluates if it's true or false
    if(my_checkbox.checked){
        sub_result.textContent = `You are subscribed!`;
    }
    else{
        sub_result.textContent = `You are NOT subscribed!`;
    }

    //if the payment buttom is checked:
    if(visa_btn.checked){
        payment_result.textContent = `You're paying with Visa.`;
    }
    else if(mastercard_btn.checked){
        payment_result.textContent = `You're paying with MasterCard.`;
    }
    else if(paypal_btn.checked){
        payment_result.textContent = `You're paying with PayPal.`;
    }
    //if none of these payment buttons are checked:
    else{
        payment_result.textContent = `You MUST select a payment method!`;
    }
}