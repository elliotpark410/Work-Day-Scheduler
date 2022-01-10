# Work Day Scheduler

The Work Day Scheduler is a simple calendar app for scheduling your work day. The calendar allows a user to save events for each hour of the day and color code past, present, or future hours. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


<br>

## Getting Started

Open your favorite web browser and enter the following web address to access. 

>https://elliotpark410.github.io/Work-Day-Scheduler/

<br>

## Prerequisites

1. Any of these internet browser will do 
<br>
<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/main-desktop-browser-logos.png" title="Browser Icons image" width = 200 >


2. To see code HTML, CSS, or JavaScript code, any of these Text editors will do
<br>
<img src="https://miro.medium.com/max/1400/0*MyAfggJM7yH40Sdx." title="Text Editor Icons image" width = 200px>

<br>

## Installing

To install this code, use Github's guidlines to clone the repository
<br>

Here is a link to the Github repository
>https://elliotpark410.github.io/Work-Day-Scheduler/

<br>

## Screenshots 

<img src="Work Day Scheduler screenshot.png" title="Work Day Scheduler screenshot" width = 700px>

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

## Code Snippets

This code snippet shows how to display persisted data that is saved in local storage

* The each() function is like a for loop, but it's a shorter syntax with the help of jQuery. It will commit the function for each element with a specified class or id 

* $(this) is self-referential and will refer to the function created above it

* localStorage.getItem will retrieve the data that is already saved in local storage. I created a variable for localStorage.getItem and used it later as an argument to include savedDescription

* Select elements in HTML page with Jquery $("element") and if an element is a sibling, you can use .siblings() method


```

function showSaved() {
  $(".hour").each(function() {
    var savedHour = $(this).text();
    var savedDescription = localStorage.getItem(savedHour);
    $(this).siblings(".description").val(savedDescription);
  });
}
showSaved();


```

 <br>

## Deployed Link

* [https://elliotpark410.github.io/Work-Day-Scheduler/](#)

<br>

## Learning Points

* How to use jQuery API, Bootstrap API, fontawesome API, and Google Fonts API
<br>

* How to display multiple elements with local storage 

<br>

* How to use $(this) within the function to be self-referential of the function it is in 

<br>

## Authors

* **Elliot Park** 

- [Link to Work Day Scheduler application](https://elliotpark410.github.io/Work-Day-Scheduler/)
- [Link to Github](https://github.com/elliotpark410)
- [Link to LinkedIn](https://www.linkedin.com/in/elliot-park/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

<br>

## License

This project is licensed under the UC Berkeley Extension Program 

<br>

## Acknowledgments

* Thank you to Jerome Chenette, Manuel Nunes, Daniel Chicchon, Brittany Crosthwait for their help!
