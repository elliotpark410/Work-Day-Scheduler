// Create variable called currentDay to get current day in moment.js and display it to #currentDay id (html p tag)
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Create variables for hours timeblock as an array. use military time
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

// Create variable for current hour
var currentHour = currentDay.format("hA");
console.log(currentHour);