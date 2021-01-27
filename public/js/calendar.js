var currentDay = $("#currentDay");

// here we use moment.js and create a variable that stores the value of the current date. It is then formatted to display the day of the week, month, calendar day and year. 
var currentDate = moment().format("dddd, MMMM Do YYYY");
// here we use moment.js and create a variable that stores the value of the current hour. It is then formatted to display the 24h hour. This will later be used to style the time-block rows according to the time of day.
var currentHour = moment().format("H");

// we use the "currentDay" variable to access the id and <p> tag in the jumbotron and assign it the "currentDate" text values.
currentDay.text(currentDate);

// we create a function that holds the code that will be necessary to style each time-block row according to the time of day using classes from our external stylesheet.
function styleTimeBlocks() {

    // here we access each "time-block" class and create an anonymous function that will hold the code that will style each time-block row according to the current time of day.
    $(".time-block").each(function () {

        // here we set a variable that we can use to store the value of the hour of day for each time-block row.
        // we use the pareseInt function to reference each time block using "this", target the "id" (ex. "hour-9") for the hour and use .split to remove the "-" from the id name. It then takes what's leftover ("9") and parses the string into an integer.

        var thisBlockHr = parseInt($(this).attr("id").split("-")[1]);

        // this uses an if statement to check if our current hour variable is equal to the current hour. If it is true, we add the "present" class from our external stylesheet and remove the "past" "future" classes.
        if (thisBlockHr == currentHour) {
            // this turns the time-block red
            $(this).addClass("present").removeClass("past future");
        }
        // this uses an if statement to check if our current hour variable is less than the current hour. If it is true, we add the "past" class from our external stylesheet and remove the "present" and "future" classes.
        if (thisBlockHr < currentHour) {
            // this turns the time-block grey
            $(this).addClass("past").removeClass("present future");
        }
        // this uses an if statement to check if our current hour variable is greater than the current hour. If it is true, we add the "future" class from our external stylesheet and remove the "past" and "present" classes.
        if (thisBlockHr > currentHour) {
            // this turns the time-block green
            $(this).addClass("future").removeClass("past present");
        }
    });
}

// this will call the styleTimeBlocks function to style the time-blocks
styleTimeBlocks();
