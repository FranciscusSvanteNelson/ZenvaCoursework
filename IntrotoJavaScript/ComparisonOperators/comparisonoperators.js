
//equality
let item = 'engine';

if(item == 'engine'){
    console.log('engine!');
}


// Inequality example 
// if (item != 'engine') {
//    console.log('not an engine!');
// }

let score = 50;

if (score >= 60) {
    console.log('pass');
}

else {
    console.log('fail');
}


let isEngine = item == 'engine';
console.log(isEngine);

//Challenge
let balance = 100;
let itemPrice = 10;

if(balance >= itemPrice){
    balance -= itemPrice;
    console.log('item purchased');
    console.log(balance);
}

else {
    console.log('Insufficient funds');
}

