// 1 hour = 60 minute converter
function hourToMinutes (hours){
    let result = hours * 60;
    return result;
}

let a = hourToMinutes(10);
console.log(a);

let dayToHours = function(days){
    return days * 24;
};

let c = dayToHours(1);
console.log(c);

// Opening a Shop + Variables
let balance = 100;
let stock = 50;
let price = 5;

function sellItem(quantity){

    // 1 - check if we have stock
    if (quantity <= stock){
        stock -= quantity;
        balance += price * quantity;
        console.log('purchase completed', balance, stock);
    }

    else{
        console.log('the sale was not completed');
    }
}
sellItem(12);
// Can deplete the stock using this function