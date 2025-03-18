// Array = a variable like structure that can hold more than 1 value
// Good to use when you're using the same type of variable many times
// so you can spare your time by using arrays instead of creating, for example,
// car1, car2, car3, car4
// you can simply create car[]

let fruits = ["apple", "orange", "banana"]; // each item is called an element

// you can change the elements by accessing that array at a given element
//fruits[2] = "coconut";

// you can add a new element to the array
//fruits[3] = "pineapple"
//console.log(fruits[3]);

// there's a built-in method to add new elements .push();
//fruits.push("coconut");
//console.log(fruits[3]);

// .pop(); is going to remove the last element
//fruits.pop();

// the .unshift(); method will add an element to the beginning
//fruits.unshift("mango");

// .shift(); removes an element from the beginning
//fruits.shift();



// to get the length of an array, there's a length property
//let numOfFruits = fruits.length;
//console.log(numOfFruits);

// we can find the index of an element, if there's a match
// if you search for an element that doesn't exist, it'll return -1
// that can be helpful within an if(){} statement to check if it returns -1
// and warn the user that the element wasn't found
//let index = fruits.indexOf("apple");
//console.log(index);
// if(index == -1){
//     alert("The fruit couldn't be found!")
// }

//for(let i = 0; i < fruits.length; i++ ){
    //console.log(fruits[i]);
//}


// REVERSE DISPLAYING THE ELEMENTS (i--)
// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

// enhanced for loop / shortcut to displaying the elements of an array
// for(let fruit of fruits){
//     console.log(fruit);
// }

// to sort an array you can use the .sort() method
// it'll sort in alphabetical order
//fruits.sort();

// reverse order
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}


// ALWAYS REUSED AT THE END
// console.log(fruits[0]); // you can display a single element through it's index
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);