function write(message)
{
    document.getElementById('message').innerHTML += message + '<br/>';
}

var mystring = {
    firstname: "Kim",
    lastname: "Faul",
    toString: function()
    {
        return "Name: " + this.firstname + " " + this.lastname;
    }
}

write("This is my test webpage");
write(mystring.toString());