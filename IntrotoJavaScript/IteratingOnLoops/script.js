let scores = [10, 20, 10];

for(i = 0; i < scores.length; i++){
    scores[i]++;
}

console.log(scores);

scores.forEach(function (entry, index){

    console.log(entry, index);
});


let catalog = [{
    title: 'JS for Beginners',
    author: 'Zenva',
    copies: 1
    },
    
    {
    title: 'Another Book for Learning',
    author: 'Zenva',
    copies: 1
    }
]

catalog.forEach(function(entry){
    console.log(entry);
    if(entry.author == 'Zenva') {
        entry.copies ++;
    }
})

console.log(catalog);