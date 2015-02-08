function write(message)
{
    document.getElementById('message').innerHTML += message + '<br/>';
}

write("");
write("Equality test <br/>");
write("=== operator: <br/>");
var joe = { name: "Joseph" };
write("joe equals joe: " + (joe === joe));

var joe2 = { name: "Joseph" };
write("joe equals joe2: " + (joe === joe2));

var numOne = 1;
var numOneString = "1";
write("1 === '1': " + (numOne === numOneString));
write("apple === apple: " + ("apple" === "apple"));
write("apple === cat: " + ("apple" === "cat"));
write("16 === 16: " + (16 === 16));

write("<br/>== operator: <br/>");
write("1 == '1': " + (numOne == numOneString));
write('"" == 0: ' + ("" == 0));

