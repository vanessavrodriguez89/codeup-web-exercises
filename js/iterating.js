(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["Vanessa", "Ryan", "Tracy", "Audi"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements in this array is: " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        names.forEach(function(index) {
            console.log(index);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var myArrayExample = [1, 2, 3, 4, 5];
    function firstItemArray(myArrayExample) {
        return myArrayExample[0];
    }

    console.log("Returns the first item in the array which should be 1: " + firstItemArray(myArrayExample));

       function secondItemArray(myArrayExample) {
        return myArrayExample[1];
    }

    console.log("Returns the second item in the array which should be 2: " + secondItemArray(myArrayExample));

        function lastItemArray(myArrayExample) {
        return myArrayExample[4];
    }

    console.log("Returns the last item in the array which should be 5: " + lastItemArray(myArrayExample));


})();
