// outer/global scope

var factorial = (function hideTheCahe() {
    // midle scope, where we hide 'cache'
    var cache = {};
    return factorial;

    function factorial(x) {
        // inner scope
        if (x < 2) return 1;
        if(!(x in cache)) {
            cache[x] = x * factorial(x-1);
        }
        return cache[x];
    }
})(); // Invoking Function Expressions Immediately

console.log(factorial(6));

/*
aching a function’s computed output to optimize performance when repeated calls of the same inputs are expected— is 
quite common in the Functional Programming (FP) world,
*/