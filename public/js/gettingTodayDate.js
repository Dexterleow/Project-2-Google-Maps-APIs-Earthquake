
// Getting the date and time zone of user's browser
// When setting a date, without specifying the time zone,JavaScript will use the browser's time zone.
// When getting a date, without specifying the time zone,the result is converted to the browser's time zone.

var d = new Date();
document.getElementById("currentDate").innerHTML = d.toDateString();
