document.getElementById("my_h1").textContent = `Hello`;
document.getElementById("my_paragraph").textContent = `I like pizza!`;

/*
    Variable = A container that stores a value.
               Behaves as if it were the value it contains.
    
    1. Declaration      let / var / const = x; (declaração)
    2. Assignment       x = 100; (atribuição)
*/

let x = 200;
let first_name = "Bro";
let favorite_food = "Pizza";
let email = "bro123@gmail.com"

console.log(typeof first_name) //typeof = string

// strings can contain numbers, but the numbers on a string can't be used for math. Strings have a different behaviour from numbers

// numbers can be used in arithmetic expressions, strings not so much

console.log(`Your name is ${first_name}`)
console.log(`You like ${favorite_food}`)
console.log(`Your email is ${email}`)