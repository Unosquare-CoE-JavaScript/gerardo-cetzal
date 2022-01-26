"use strict";

/*fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(data => data.json())
.then(obj => console.log(obj));*/

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

// We called an endpoint, in this case with method post
// so, we can send an object in the body of the request

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
// the fetch we will return a promise and need to convert the response
// we can manage the result of the promise with the keyword then
// if exist any error we have the keyword catch
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(reject => console.log(`Unable to create todo ${reject}`));

console.log('Other code');