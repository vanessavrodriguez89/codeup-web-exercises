// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

while (true) {
    var oddNumber = +prompt("Enter an odd number between 1 and 50");

    if (oddNumber % 2 !== 0 && oddNumber <= 50 && oddNumber >= 1) {
        console.log(oddNumber)
       break;
        }
}
console.log(oddNumber);
console.log("Number to skip is: " + oddNumber)

for (let i = 1; i <=50; i+= 1) {
    if (i % 2 === 0) {
        continue;
    }
    if (i !== oddNumber) {
        console.log("Here is an odd number: " + i);
    } else {
        console.log("Yikes! Skipping number: " + oddNumber);
    }
}