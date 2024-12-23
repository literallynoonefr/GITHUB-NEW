/*
    Arithmetic Operators = operands (values, variables, etc.)
                           operators (+ - * /) 
                           example 11 = x + 5;

*/

let students = 30;

// students = students + 1; //this reasigns the variable
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2; //exponents (to the power / elevado a...)



/*

    modulus operator, it displays the remainder of the division

    when using the modulus operator, create a different variable for it

    can also be used to identify an even or odd number (par ou ímpar)
*/
// let extra_students = students % 3; 



/* 
    Augmented assignment operators (+=, -=, *=, /=, **=, %=)

    Used to reduce the amount of rewrites of the same variable
*/

// students += 2;
// students *= 2;



/*
    ++ is the increment operator (increases by 1)
    students++

    -- is the decrement operator (decreases by 1)
    students--
*/




/*
    Operator Precedents (Precedence)

    Ordem dos cálculos a serem realizados, de acordo com os precedentes abaixo!

    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;
let result = 6 / 2 ** (2 + 5)


console.log(result);