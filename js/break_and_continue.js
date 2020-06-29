// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// while (true) {
//     var userNum = prompt('Enter an odd number between 1 and 50');
//
//     if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
//        break;
//         }
// }
// console.log(userNum);
//
// console.log('number to SKIP:' + userNum);
//
// for (var i = 1; i <=50; i+= 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i !== parseInt(userNum)) {
//         console.log('here is off num: ' + i);
//     } else {
//         //only reason userNum shows here is b/c of the clog.
//         console.log('Yikes! SKIPPPP THIS: ' + userNum);
//     }
// }


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
        console.log("Yikes! Skipping number" + oddNumber);
    }
}