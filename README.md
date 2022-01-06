# Work Day Scheduler

OLD REAME.MD MUST UPDATE!

The JavaScript Code Quiz is an applicaton that will test basic JavaScript knowledge. A player will be presented with coding questions in a multiple choice format and the quiz will have a time limit of 100 seconds. Every incorrect answer will subtract 10 seconds from the timer. As a developer, it is important to learn new information or refresh your knowledge of a language to continuously grow as a developer. One of the best ways to measure your understanding is by taking a quiz and seeing the score. The score is important because it is meant to be a numeric representation of your understanding of a topic. If you receive a low score, you will know that there is room for improvement and growth. If you receive a high score, you know that you have a good knowledge base of the topic. 

The application will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. This application is interactive because it collects user-generated data and matches it to a corresponding key which returns a final score. 


<br>

## Getting Started

Open your favorite web browser and enter the following web address to access. 

>https://elliotpark410.github.io/Code-Quiz/

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
>https://github.com/elliotpark410/Code-Quiz

<br>

## Screenshots 

<img src="Images\Homepage screenshot.png" title="Homepage screenshot" width = 700px>

<br>

<img src="Images\Multiple Choice screenshot.png" title="Multiple Choice screenshot" width = 700px>

<br>

<img src="Images\End of Quiz screenshot.png" title="End of Quiz screenshot" width = 700px>

<br>

<img src="Images\High Score screenshot.png" title="High Score screenshot" width = 700px>

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

## Code Snippets

This code snippet shows how to create an HTML button element in JavaScript and how the "Submit" button stores user-generated information (initials and score) and saves it to local storage

* The document.createElement() method creates the HTML element by tagName and it can be done in JavaScript

* The element.setAttribute() method sets the value of an attribute on a specified HTML element and it can be done in JavaScript

* The element.textContent property will sets the text content of a specified node and its descendants and it can be done in JavaScript

* The element.appendChild() method will adds the node as the last child on a specified parent node and it can be done in JavaScript

* The element.addEventListener() method attaches an event handler (e.g. "click") to a specified element

* The localStorage.setItem() method will add an object with a key and value to local storage or update the key's value if it already exists. It can only store data as a string

* The window.location object can be used to redirect the browser to a new page (i.e. HTML and JavaScript file)


```

var submitElement = document.createElement("button");
submitElement.setAttribute("id", "submit-button");
submitElement.setAttribute("type", "submit");
submitElement.textContent = "Submit";
questionElement.appendChild(submitElement);

submitElement.addEventListener("click", function () {

    var initials = inputElement.value;

    if (initials === "") {
        alert("Please enter your initials");
    } else {
        var playerScore = {
            initials: initials,
            score: score
        };

    localStorage.setItem("playerScore", JSON.stringify(playerScore));

    window.location = "index-scoreboard.html";
    }
});

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
