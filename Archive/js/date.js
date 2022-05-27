//creating a new paragraph
var h4 = document.createElement("h4");

var d = new Date();
var month = d.getMonth() + 1;
var year = d.getFullYear();

switch(month){
    case 1:
        month = "January"
        break;
    case 2:
        month = "February"
        break;
    case 3:
        month = "March"
        break;
    case 4:
        month = "April"
        break;
    case 5:
        month = "May"
        break;
    case 6:
        month = "June"
        break;
    case 7:
        month = "July"
        break;
    case 8:
        month = "August"
        break;
    case 9:
        month = "September"
        break;
    case 10:
        month = "October"
        break;
    case 11:
        month = "November"
        break;
    case 12:
        month = "December"
        break;
}


var node = document.createTextNode("Kyle Hackett - " + month + " " + year );
//adding the text to the paragraph
h4.appendChild(node);

var div = document.getElementById("date");
//adding the paragraph to the div
div.appendChild(h4);