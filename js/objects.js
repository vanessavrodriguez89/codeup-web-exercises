(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName: "Vanessa",
    lastName : "Rodriguez"
    };
console.log(person.firstName)
console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!")
    }
    person.sayHello()

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            console.log(shopper.name + " originally owed " + shopper.amount + " but after a 12% discount their total is " + (shopper.amount - (shopper.amount * .12)) + ".");
        } else {
            console.log(shopper.name + " didn't receive a discount and owes " + shopper.amount + ".");
        }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
        Title: "Strangers on a Train",
        Author: {
            firstName: "Patricia",
            lastName: "Highsmith",
        }
        },
        {
            Title: "The Big Sleep",
            Author: {
                firstName: "Raymond",
                lastName: "Chandler",
            }
        },
        {
            Title: "The Hound of the Baskervilles",
            Author: {
                firstName: "Sir Arthur Conan",
                lastName: "Doyle",
            }
        },
        {
            Title: "In Cold Blood",
            Author: {
                firstName: "Truman",
                lastName: "Capote",
            }
            },
        {
            Title: "The Murder of Roger Ackroyd",
            Author: {
                firstName: "Agatha",
                lastName: "Christie",
            }
        }
            ]
    console.log(books);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book,index) {
        console.log(("Book # " + (index + 1) + "\n" + ("Title: " + book.Title) + " " +  "\n" + ("Author: "  + book.Author.firstName + " " + book.Author.lastName)));
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, firstName, lastName) {
        var book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        return book;
    };
    var books = [createBook("Hyperion","Dan", "Simmons"), createBook("Raise High The Roof Beam, Carpenters", "J.D. Salinger"), createBook("On Writing", "Stephen King"), createBook("The North China Lover", "Margurite Duras"), createBook("Meditations", "Marcus Aurelius")]


    function showBookInfo(obj){
        return  "\"" + obj.title + "\" is the title of this book, and it was written by " + obj.author
    }

    // console.log(showBookInfo(books[0]));

    books.forEach(function (book) {
        console.log(showBookInfo(book));
    })

})();

