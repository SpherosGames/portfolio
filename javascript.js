let activateDropDown = 1;

function DeativateDropDown()
{
    if(activateDropDown < 0)
    {
        document.getElementById("DropDown").classList.remove('-translate-y-60');
    }
    else
    {
        document.getElementById("DropDown").classList.add('-translate-y-60');
    }
}

function ToggleDropDown()
{
    activateDropDown *= -1;
    
    if(activateDropDown < 0)
    {
        document.getElementById("DropDown").classList.remove('-translate-y-60');
    }
    else
    {
        document.getElementById("DropDown").classList.add('-translate-y-60');
    }
}