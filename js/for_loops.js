// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    console.log((num + " x 1 = " + (num * 1)));
    console.log((num + " x 2 = " + (num * 2)));
    console.log((num + " x 3 = " + (num * 3)));
    console.log((num + " x 4 = " + (num * 4)));
    console.log((num + " x 5 = " + (num * 5)));
    console.log((num + " x 6 = " + (num * 6)));
    console.log((num + " x 7 = " + (num * 7)));
    console.log((num + " x 8 = " + (num * 8)));
    console.log((num + " x 9 = " + (num * 9)));
    console.log((num + " x 10 = " + (num * 10)));
}

showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// for (var i = 0; i <= 9; i++) {
//     // console.log(i);
//    var randomNum = Math.floor(Math.random() * (200 - 20 + 1 ) + 20);
//
//     var message = (randomNum % 2 === 0) ? randomNum + ' is even' : randomNum + ' is odd';
//     // // console.log(randomNum);
//     // if ( randomNum % 2 === 0) {
//     //     console.log(randomNum + ' is even');
//     // }
//     // if (randomNum % 2 !== 0) {
//     //     console.log(randomNum + ' is odd');
//     // }
//     console.log(message);
// }

for (let i=0; i<10; i++) {
    let randomNum = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNum%2 === 0) {
        console.log(randomNum + " is even")
    } else {
        console.log(randomNum + " is odd")
    }
}

/*Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999*/

for (let i=0; i<10; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}


/* Create a for loop that uses console.log to create the output shown below.

100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5*/

for (let i = 100; i>1; i-=5) {
    console.log(i)
}