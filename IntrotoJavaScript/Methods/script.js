let player = {
    health: 100,
    fun: 100,

    eat: function(food) {
        if(food == 'apple') {
           this.health += 10; 
        }
        else if (food == 'candy') {
            this.health -= 10;
            this.fun += 10;
        }
    }
}

console.log(player);
player.eat('apple');
console.log(player);