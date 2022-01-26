"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. 
// Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function(num) {
    // we need to return a promise wiht new Promise
    return new Promise(function(resolve, reject) {
        // we check is the num is a number or not
        if(isNaN(num)) {
            // if it's NaN we execute the reject function
            reject('You need a number')
        } else {
            // if a number everything is ok
            let result = 0; 
            // we add the setTimeout function
            setTimeout(function() {
                for (let i = num ** 7; i >= 0; i--) {        
                    result += Math.atan(i) * Math.tan(i);
                };
                // and finally the resolve function
                resolve(result);
            }, 0);
        }
    });
    
};

massiveProcess(10)
    .then(function(amt) {
        console.log(`the number is ${amt}`);
    })
    .catch(function(err) {
        console.log(err);
    })

//More processing later on
console.log(5 * 5 + 100);
