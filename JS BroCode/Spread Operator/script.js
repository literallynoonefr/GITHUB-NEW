// SPREAD OPERATOR

// ... Allows an iterable such as an ARRAY or STRING
// to be expanded into separate elements
// (unpacks the elements)
// imagine you're opening a box and taking out the contents inside

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

//let username = "Don Draper";
    // the chars were displayed separatly
    // with the .join() method you can join them together
    // and if you wish you can insert chars between each element (such as a dash "-")
    // or you can leave it ""
//let letters = [...username].join("-");
//console.log(letters);

// shallow copy with no apparent change
// let fruits = ["apple", "orange", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);



let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);
