let activateDropDown = 1;

function DeativateDropDown()
{
    if(activateDropDown < 0)
    {
        console.log("Dropdown Activate");
        document.getElementById("DropDown").style.visibility = 'visible';
    }
    else
    {
        console.log("Dropdown Deactivate");
        document.getElementById("DropDown").style.visibility = 'hidden';
    }
}

function ToggleDropDown()
{
    activateDropDown *= -1;
    
    if(activateDropDown < 0)
    {
        console.log("Dropdown Activate");
        document.getElementById("DropDown").style.visibility = 'visible';
    }
    else
    {
        console.log("Dropdown Deactivate");
        document.getElementById("DropDown").style.visibility = 'hidden';
    }
}