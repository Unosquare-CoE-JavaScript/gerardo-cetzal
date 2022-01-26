"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter 
//and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

let addTodo = async function() {
    // note: only to add async in the function doesn't mean that the function is asynchronous
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });

        let results = await resp.json();

        console.log(results);
    } catch(e) {
        console.error(`Unable to create todo ${e}`);
    }
}

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};
// only pass the object
addTodo(todo);

console.log('Other code');