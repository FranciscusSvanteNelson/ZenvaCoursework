// All Code Commented Out in order to go lesson to lesson in one file without interfering with variables/functions etc used in past lessons

// Setting a Variable and seeing it in the console
// var i = 5;
// console.log(i);
/* 
    multiple line comment
    like this
*/
// set variables 
// var age = 28;
// var money = 50.05;
//  change the variable without redeclaring
// age = 29;
// var isUserLoggedIn = false; // boolean values true/false etc
// string variables use quotes '' or "" 
// var name = "Franciscus";
// const title = "My Webpage";
// you can not change this variable

// Assignment : =
// var age = 28;
// var firstName = "Franciscus";
// var lastName = "Nelson";
// var money = 50.05;


// Arithmetic: + - & / %
// age += 1;                          // this is the same as:  age = age + 1;
// console.log(firstName + lastName) 



//Comparison: == != > >= < <=
// var canAfford = money >= 20;

//Logical: && || !
// var cannotAfford = !canAfford;
// var canBuy = canAfford %% age >= 18;

// Learning About Arrays

// var shoppingList = ["Butter", "Milk", "Eggs"];
// console.log (shoppingList);
// var butter = shoppingList[0];
// console.log(butter)
// shoppingList[1] = "Cheese";

// var listLength = shoppingList.length
// shoppingList.push("Butter");
// shoppingList.pop();
// var butter = shoppingList.pop();

// var lightState = "Red"
// if (lightState == "green"){
//     console.log("Go");
// }
// else if (lightState == "red"){
//     console.log("Stop");
// }
// else {
//     console.log("Slow Down");
// }

// var position = 0;
// const endPosition = 5;

// while (position < endPosition){
//     position += 1;
    // code to move the player along a position would go here

// }

// var shoppingList = ["Butter", "Milk", "Eggs",]


// for (var i = 0; i < shoppingList.length; i ++) {
//     var item = shoppingList[i];
//     console.log(item);
// }

// var position = 0;

//  function playerMove(){
//      position ++;
//  }

/// playerMove();

// function playerMove(byAmount){
//     position += byAmount;

// }
// playerMove(5);
// console.log(position);

// function playerMove(position, byAmount){
//     const newPosition = position + byAmount;
//     return newPosition;
// }
//  var finalPosition = playerMove(0,2);

//  console.log(finalPosition);

// var MainCharacter = {
//     Name: "Franciscus",
//     Position: 2,
//     Health: 100,
//     move: function(byAmount){
//         this.Position += byAmount;
//     }
// };

// MainCharacter.Health = 50;
// console.log(MainCharacter.Health);

// MainCharacter.move(10);
// console.log(MainCharacter.position);

var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");

function displayOutput(){
    const text = input.value;
    output.innerHTML = text;
}

button.addEventListener("click", displayOutput);







