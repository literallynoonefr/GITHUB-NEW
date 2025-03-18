// REST PARAMETERS

// (...rest) allow a function to work with a variable number of arguments
// by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// the rest parameter effectively does the opposite of the spread

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

//openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
