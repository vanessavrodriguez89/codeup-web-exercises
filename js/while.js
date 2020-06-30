/*Create a while loop that uses console.log() to create the output shown below.


2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536*/

var startingNum = 1;

while (startingNum <= 32768) {
    console.log(startingNum * 2);
    startingNum*=2;
}

//* An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.*/

let allCones = Math.floor(Math.random() * 50) + 50;
let amountPurchased;
do {
    console.log("I have " + allCones + " for sale.")
    amountPurchased = Math.floor(Math.random() * 5) + 1;
    if (amountPurchased <= allCones) {
        console.log(amountPurchased + " sold");
        allCones = allCones - amountPurchased
    } else if (allCones === 0) {
        console.log("Yay! I sold them all!");
    } else {
        console.log("Cannot sell you " + amountPurchased + " cones. I only have " + allCones);
        // break;
    }
} while (allCones !== 0);
