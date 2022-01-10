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

* The document.createElement() method creates the HTML element by tagName and it can be done in JavaScript

* The element.setAttribute() method sets the value of an attribute on a specified HTML element and it can be done in JavaScript


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

* [https://elliotpark410.github.io/Code-Quiz/](#)

<br>

## Learning Points

* How to use local storage, window.location, event listeners, appendChild, setAttributes, createElement, and more
<br>

* The importance of using variables correctly and the importance of creating placeholder variables in the beginning
<br>

* The importance of using appendChild in the correct location. It should not always be right after the creation of the element 

<br>

## Authors

* **Elliot Park** 

- [Link to JavaScript Code Quiz application](https://elliotpark410.github.io/Code-Quiz/)
- [Link to Github](https://github.com/elliotpark410)
- [Link to LinkedIn](https://www.linkedin.com/in/elliot-park/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

<br>

## License

This project is licensed under the UC Berkeley Extension Program 

<br>

## Acknowledgments

* Thank you to Jerome Chenette, Manuel Nunes, Daniel Chicchon, Brittany Crosthwait for their help!
