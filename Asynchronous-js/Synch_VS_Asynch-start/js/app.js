"use strict";
// how to make an async function
const test = function() {
    setTimeout(function() {
        console.log('Start of code');
        alert('Notice Me!');
        console.log('End of code')
    }, 1000);
};

const test2 = function() {
    console.log('Now I get attention');
};

test();
test2();