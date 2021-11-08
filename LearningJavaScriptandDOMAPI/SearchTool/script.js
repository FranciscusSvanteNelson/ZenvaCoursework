var adventureList = [];
var adventures = document.getElementsByClassName("adventure");

for(var i = 0; i < adventures.length; i++)
    {
        var adventureName = adventures[i].innerHTML;
        adventureList.push(adventureName);
    }

var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", function(event)
    {
        var text = searchBar.value;
        for(var i = 0; i < adventures.length; i++){
            if(adventureList[i].indexOf(text) < 0) 
            {
                adventures[i].style.display = "None";
            }
            else 
            {
                adventures[i].style.display = "Block";
            }
        }
    });