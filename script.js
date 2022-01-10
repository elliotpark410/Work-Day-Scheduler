// Create variable called currentDay to get current day in moment.js and display it to #currentDay id (html p tag)
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));


// Create a function that can compare currenthour to timeBlockHour and see if it past, present, or future
function relationshipToTime() {
  var currrentHour = moment().hour();

  // Moment.js gives the hour in a number format and return 0 to 24. Include id = "1" for the time-block div 
  console.log(currrentHour);
  
  // each() function is like a for loop
  // Create each function for elements with class "time-block"
  $(".time-block").each(function() {
    // console logs each time-block and its children
    console.log(this); 


    // create a variable for timeBlockHour
    // parseInt - converts the argument into a string, which is needed to compare timeBlockHour and currentHour
    // $(this) is an object reference so it is referring to the $(".time-block").each function 
    // attr() method returns the attribute associated with the id in $)".time-block"
    var timeBlockHour = parseInt($(this).attr("id"));
    // console log the id associated with each time block hour in string format 
    console.log(timeBlockHour);


    // Create an if statement with a comparison codition so that each timeBlockHour gets a corresponding class (past, present, future)
    if (timeBlockHour === currrentHour) {
        // $(this) is an object reference so it is referring to the $(".time-block").each function so it wass add "present" class to each time-block
      $(this).addClass("present");

    } else if (timeBlockHour < currrentHour) {
      $(this).addClass("past");

    } else {
      // (timeBlockHour > currentHour)
      $(this).addClass("future");
    }
  });
}

// Call function
relationshipToTime();



// Create variable for saveButton that selects the saveBtn with .saveBtn clas
var saveButton= $(".saveBtn");

// .on("click") is a jQuery shortcut to create an event handler on click 
// when user clicks the save button, it will run a function
saveButton.on("click", function() {

  // Confrm that saveButton function works with console log
  console.log("savebutton test"); 

  // Create a variable called saveHour to get the text in the div element with ".hour" class 
  // Need to use $(this) because when I click the save button it will store the specific text in the ".hour" class (e.g. 08AM) that is associated with the save button
  // In html, the elment with ".saveBtn" class is siblings with the element with ".hour" class because they are in the same time-block div
  var saveHour = $(this).siblings(".hour").text();

  // Create a variable called saveDescription to get the value in the div element with ".description" class 
  // Need to use $(this) because when I click the save button it will store the specific value in the ".description" class (e.g. "Begin homework") that is associated with the save button
  // In html, the elment with ".saveBtn" class is siblings with the element with ".description" class because they are in the same time-block div
  var saveDescription = $(this).siblings(".description").val();

  // Save variables to local Storage
  localStorage.setItem(saveHour, saveDescription);
});



// Create a function to show variable that were saved to local storage so that when I refresh page the time and description will persist


function showSaved() {
  // each() function is like a for loop
  // Create each function for elements with class ".hour"
  $(".hour").each(function() {
    // Create savedHour variable that will get the text in the element with class ".hour"
    // Need to use $(this) so the variable stores the specific text associated with each element with ".hour" class
    var savedHour = $(this).text();

    // Create savedDescription variable that will get the savedHour variable (i.e. the text in the element with class ".hour") from local storage (e.g. 08AM, 09AM, etc)
    var savedDescription = localStorage.getItem(savedHour);

    // Use $(this) so that it can refer to the specific text associated with each element with ".hour" class
    // Get the value (i.e. text input) for the elements with the ".description" class 
    // Enter argument (savedDescription) so that it is retrieved from loca storage
    $(this).siblings(".description").val(savedDescription);
  });
}
// Call function
showSaved();



