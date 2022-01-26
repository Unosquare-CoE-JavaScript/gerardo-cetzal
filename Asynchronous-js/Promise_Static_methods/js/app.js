"use strict";

// example a basic promise
// we only add a set time for resolve the promise
let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Done");
    }, 4000);
});

/*p1.then(function(val) {
    console.log(val);
}, function(val) {
    console.log("rejected: " + val);
});*/



console.log("see this is asynch code");