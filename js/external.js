"use strict"

console.log('Hello from external JavaScript!');

/*Use the alert function to show a message that says 'Welcome to my Website!'.*/
alert("Welcome to my Website!");

/*Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

    For example, if the user enters "blue", your code should alert a message that says:

    "Great, blue is my favorite color too!"*/

let favoriteColor = prompt("What is your favorite color?");

if (favoriteColor === "blue") {
    alert("Great, blue is my favorite color too!");
}


/*
Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

    When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    Use an alert to show the results of each problem.*/

    // First Exercise
let pricePerDay = 3
let littleMermaid = parseInt(prompt("How many did would you like to rent The Little Mermaid for?"));
let brotherBear = parseInt(prompt("How many did would you like to rent Brother Bear for?"));
let hercules = parseInt(prompt("How many did would you like to rent Hercules for?"));

let totalCost = (littleMermaid + brotherBear + hercules) * pricePerDay;

alert("Your total cost is: $" + totalCost);

    // Second Exercise
let google = 400;
let amazon = 380;
let facebook = 350;
let googleHours = parseInt(prompt("How many hours did you work at Google?"));
let amazonHours = parseInt(prompt("How many hours did you work at Amazon?"));
let facebookHours = parseInt(prompt("How many hours did you work at Facebook?"));

alert("Your total pay is $" + ((facebook * facebookHours) + (google * googleHours) + (amazon * amazonHours)));

    // Third Exercise
let isClassOpen = confirm("Is there room in this class?");
let isScheduleOpen = confirm("Does this class work with your schedule?");
alert("You may register: " + (isClassOpen && isScheduleOpen));

    // Fourth Exercise
let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired");
let isPremiumMember = confirm("Press OK if you are a premium member");

alert("Offer Applied: " + (isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember)));

