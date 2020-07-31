// fetch(url, {headers: {'Authorization': gitHubKey}});

//TODO Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

let getGithubCommit = (user) => {
    return fetch(`https://api.github.com/users/${user}/events`,{headers: {'Authorization': gitHubKey}}).then(response => response.json()).then(data => data[0].created_at).catch("Error")
}

console.log(getGithubCommit('vanessavrodriguez89'))
console.log(getGithubCommit('VelasquezTracy25'))

// TODO Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

let wait = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve("we're done")
            } else {
                reject("it didn't work")
            }
        }, number);
    });
}

wait(1000).then(() => console.log(`You'll see this after 1000 milliseconds`));

wait(3000).then(() => console.log(`You'll see this after 3000 milliseconds`));

wait(5000).then(() => console.log("You'll see this after" + number + "milliseconds"));