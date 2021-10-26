let player = {
    age: 99, 
    name: 'ABC',
    isActive: true,
    outfit: {
        color: 'blue',
        size: 'medium',
        cost: 100,
        isNew: true
    }
};



console.log(player['name']);

player.isActive = false;

console.log(player);

player.health = 100;
console.log(player);

delete player.health;
console.log(player);

console.log(player.outfit.color);


// Challenge, Modify the size of the outfit
player.outfit.size = 'large';
console.log(player.outfit.size);
