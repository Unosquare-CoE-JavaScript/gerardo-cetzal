'use strict';
// this is a little refactor with IIFEs
// is the same functionality as app.js in this folder
(async function() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/5')
    let obj = await data.json();
    console.log(obj)
})();

console.log('Other code');