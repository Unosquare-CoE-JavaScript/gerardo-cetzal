"use strict";

// the promise has to parameters, resolve when everything is ok, and reject when is something is wrong
// this examples are basic because only put a setimeout inside the promise
let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};
