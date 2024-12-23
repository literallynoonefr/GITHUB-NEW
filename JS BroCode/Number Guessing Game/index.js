const min_num = 1;
const max_num = 100;
const answer = Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min_num} - ${max_num}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess < min_num || guess > max_num){
        window.alert("Please enter a valid number!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low, try again!");
        }
        else if(guess > answer){
            window.alert("Too high, try again!");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }

    
}