function checkPassword()
{
    var pswd = document.forms["signup"]["pswd"].value;
    var checkpswd = document.forms["signup"]["checkpswd"].value;

    if(pswd == checkpswd)
    {
        return true;
    }
        

    else 
    {
        alert ("\nPlease ensure that passwords match. Please try again..");
        return false;
    }
        
}

function validateUser()
{
    var username = document.forms["signup"]["username"].value;

    if(username.length < 8)
    {
        alert("Username should be at least 8 characters long");
        return false;
    }

    if(username.length > 25)
    {
        alert("Username must be less than 26 characters long");
        return false;
    }
}

function reservedUser()
{
    var rsrvdUser1 = document.forms["signup"]["username"].value;
    rsrvdUser1 = rsrvdUser1.toLowerCase();

    var reservedUser =["jBillz", "PineapplesBelongOnPizza", "TheRock", "ZachKing", "Rihanna", "Microsoft", "ActionJackson"];
    
    for( var i= 0; i < reservedUser.length; i++)
    {
        if(rsrvdUser1 == reservedUser[i].toLowerCase())
        {
            alert("Besos reserved the username " + reservedUser[i]+ "! Try again.")
        }
        else
        {
            
        }
    }
}

