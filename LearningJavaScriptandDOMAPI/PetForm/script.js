var checkbox = document.getElementById("petCheckbox");
var selectionDiv = document.getElementById("petSelection");

checkbox.addEventListener("change", function(event)
    {
        if(checkbox.checked == true)
        {
            selectionDiv.style.display = "Block";
        }
        else {
            selectionDiv.style.display = "None";
        }
    });

var saveForm = document.getElementById("saveForm");

saveForm.addEventListener("submit", function(event)
    {
        event.preventDefault();
        var nameText = saveForm.elements[0].value;
        var addressText = saveForm.elements[1].value;
        var ageText = saveForm.elements[2].value;
        var doesHavePets = saveForm.elements[3].checked;
        var petText = "No Pets";
        if (nameText == "")
        {
            alert("Please enter a valid name");
            return;
        }
        if (addressText == "")
        {
            alert("Please enter a valid address");
            return;
        }
        if (ageText == "")
        {
            alert("Please enter a valid age");
            return;
        }
        if(doesHavePets)
        {
            petText = saveForm.elements[4].value;
        }
        if(petText == "Dog")
        {
            alert("Sorry, we have reached maximum bookings for Dogs");
            return;
        }
        alert("Booking completed. Information:\n" + nameText + 
        "\n" + addressText + "\n" + ageText + "\n" 
        + petText);
    });