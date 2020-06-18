"use strict"

console.log('Hello from external JavaScript!');

/*Use the alert function to show a message that says 'Welcome to my Website!'.*/
alert("Welcome to my Website!");

/*Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

    For example, if the user enters "blue", your code should alert a message that says:

    "Great, blue is my favorite color too!"*/

var favoriteColor = prompt("What is your favorite color?");

if (favoriteColor === "blue") {
    alert("Great, blue is my favorite color too!");
}


/*
Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

    When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    Use an alert to show the results of each problem.*/

    // First Exercise
var littleMermaid = 3, brotherBear = 5, Hercules = 1, pricePerDay = 3;
var totalCost = (littleMermaid + brotherBear + Hercules) * pricePerDay

alert("Your total cost is: $" + totalCost);

    // Second Exercise
var google = 400, amazon = 380, facebook = 350;

alert("Total pay is $ " + ((facebook * 10) + (google * 6) + (amazon * 4)));

// Third Exercise

