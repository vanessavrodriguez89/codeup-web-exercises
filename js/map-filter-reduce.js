const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const filteredLanguages = users.filter(user => user.languages.length > 2)
console.log(filteredLanguages)

// TODO 2. Use .map to create an array of strings where each element is a user's email address
const emailAddress = users.map(user => user.email)
console.log(emailAddress)

// TODO 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const average = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0) / users.length;
console.log(average)

// TODO 4. Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((a, user) => user.email.length > a.length ? user.email : a, '')
console.log(longestEmail)

// 5. TODO Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// const singleUserStr = users.reduce((a, user) => a + `${user.name}`, '')
const singleUserStr = users.reduce((a, user) => {
    a.push(user.name);
    return a;
}, []).join(', ');
console.log(singleUserStr)

// TODO BONUS Use .reduce to get the unique list of languages from the list of users.
const uniqueList = Array.from(new Set(users.reduce((a, user) => { a.push(...user.languages); return a; }, [])));
console.log(uniqueList)



//     users.reduce((a, user) => {
//     return a.push(user.languages) > a !== user.languages ? a : ''
// }, [])



