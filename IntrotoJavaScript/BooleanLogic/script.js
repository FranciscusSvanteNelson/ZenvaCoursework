let distance = 99;
let fuel = 100;

// adding a pair of boolean valuables
let fardistanceCondition = distance <= 200 && distance >= 100 && fuel >= 100;
let isEngineFunctioning = true;

console.log(fardistanceCondition);

if (!isEngineFunctioning || distance > 200) {
    console.log('you can not travel this distance');
}
else if(fardistanceCondition + fuel >= 100) {
    console.log('you can travel this distance');
}
else if(distance < 100 && fuel >= 25) {
    console.log('this distance is easily travelled')
}





