"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/*var analyzeColor = function (color) {
    if (color === "blue") {
        console.log("blue is the color of the sky");
    } else if (color === "red") {
        console.log("Strawberries are red")
    } else if (color === "cyan") {
        console.log("I don't know anything about cyan")
    } else {
        console.log("Is not one of the predefined colors")
    }
}*/

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/*var analyzeColor = function (color) {
    switch (color) {
        case "blue":
            console.log("blue is the color of the sky")
            break;
        case "red":
            console.log("Strawberries are red")
            break;
        case "cyan":
            console.log("I don't know anything about cyan")
            break;
        default:
            console.log("Is not one of the predefined colors")
    }
}

analyzeColor(randomColor);*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*let userColor = prompt("Type in a color in lowercase letters")
var analyzeColor = function (userColor) {
    switch (userColor) {
        case "blue":
            alert("blue is the color of the sky")
            break;
        case "red":
            alert("Strawberries are red")
            break;
        case "pink":
            alert("That's my favorite color!")
            break;
        case "cyan":
            alert("I don't know anything about cyan")
            break;
        case "purple":
            alert("Did you watch Barney as a kid?")
            break;
        default:
            alert("Is not one of the predefined colors")
    }
}

analyzeColor(userColor);*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*let randomNum = Math.floor((Math.random() * 5))
let luckyNum = randomNum

if (randomNum === 0) {
    luckyNum = 0
} else if (randomNum === 1) {
    luckyNum = 0.10
} else if (randomNum === 1) {
    luckyNum = 0.10
} else if (randomNum === 2) {
    luckyNum = 0.25
} else if (randomNum === 3) {
    luckyNum = 0.35
} else if (randomNum === 4) {
    luckyNum = 0.50
} else {
    luckyNum = 1.00
    }

var calculateTotal = function (luckyNum,totalAmount) {
    return totalAmount - (luckyNum * totalAmount)
}

console.log(calculateTotal(luckyNum, 10));*/


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

let billTotal = prompt("What amount was your total bill?")
var luckyNumber = Math.floor(Math.random() * 6);
    switch (luckyNumber) {
        case 0:
            alert("Sorry, you did not win a discount. Better luck next time.")
            break;
        case 1:
            alert("You won a 10% discount!")
            break;
        case 2:
            alert("You won a 20% discount!")
            break;
        case 3:
            alert("You won a 30% discount!")
            break;
        case 4:
            alert("You won a 40% discount!")
            break;
        case 5:
            alert("You won a 50% discount!")
            break;
        default:
            alert("You won a 60% discount")
    }

var calculateTotal = function (luckyNumber,billTotal) {
    return billTotal - ((luckyNumber * 0.10) * billTotal);
}

    alert("Your total before the discount was $" + billTotal);
    alert("Your total after discount is $" + calculateTotal(luckyNumber, billTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmNumberInput = confirm("Would you like to enter a number?");
if (confirmNumberInput) {
    prompt("Enter a number")
    { if (confirmNumberInput === true) {
        (confirmNumberInput % 2 === 0) ? alert("You entered an even number") : alert("You entered an odd number");}
        {(confirmNumberInput >= 0) ? alert("You entered a positive number") : alert("You entered a negative number");}
        alert("The number you entered + 100 is = " + (confirmNumberInput() + 100));
    }
    }
// else
//     {
//         alert("You chose not to participate.")
//     }
// }
