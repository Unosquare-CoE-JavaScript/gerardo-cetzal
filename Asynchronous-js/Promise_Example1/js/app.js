"use strict";

// THE PERFECT EXAMPLE ABOUT PROMISE: I Promise a Result!

/*

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code

*/
const swapi = function(num) {
    let url = "https://swapi.dev/api/people/";

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        return fetch(obj.homeworld);
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj));
};

swapi(9);

console.log("Other commands!");